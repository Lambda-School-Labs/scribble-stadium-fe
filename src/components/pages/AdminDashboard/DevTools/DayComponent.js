import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { connect } from 'react-redux';
import { devMode, date } from '../../../../state/actions/index';

const { Content } = Layout;

const DayComponent = ({ day, devMode, setDevMode, setDate }) => {
  const { push } = useHistory();

  const handleSim = () => {
    push(`${day.gameStageUrl}`);
  };

  const handleDevMode = () => {
    setDevMode(!devMode.isDevModeActive);
  };

  const findNextDayOfWeek = selectedDay => {
    let date = new Date();
    let resultDate = new Date(date.getTime());
    resultDate.setDate(
      //.setDate is a JS date function NOT the setDate() action used by Redux
      date.getDate() + ((7 + selectedDay - date.getDay()) % 7)
    );
    return resultDate;
  };

  useEffect(() => {
    setDate(findNextDayOfWeek(day.findDayOfWeekReference));
  }, [day.findDayOfWeekReference]);

  return (
    <div>
      <h2>{day.dayName}</h2>
      <h3>{day.dayNumber}</h3>
      <h4>{day.stage}</h4>
      <Content>
        <p>{day.content}</p>
        <button onClick={handleDevMode}>
          {devMode.isDevModeActive ? 'Deactivate' : 'Activate'} developer mode
        </button>
      </Content>
      <Button
        style={{ width: '45%' }}
        onClick={handleSim}
        disabled={day.gameStageUrl == null}
      >
        Simulate Game Play
      </Button>
    </div>
  );
};

export default connect(
  state => ({
    devMode: state.devMode,
    date: state.date,
  }),
  { setDevMode: devMode.setDevMode, setDate: date.setDate }
)(DayComponent);
