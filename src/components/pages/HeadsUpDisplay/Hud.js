import React, { useState } from 'react';
import { CountDownTimer } from './CountdownTimer';
import Hud from '../../../styles/less/Hud.less';
import { UpCircleFilled } from '@ant-design/icons';

export default function (props) {
  const { currentActivity, currentBar } = props;

  const activities = [
    'Read',
    'Draw',
    'Write',
    'Squad Up',
    'Point Share',
    'Voting',
  ];

  const dayBars = ['bar1', 'bar2', 'bar3'];

  return (
    <div className="HudContainer">
      <CountDownTimer />
      <br />
      {/* This is going to show all tasks as well as indicating current task */}
      <div className="progressionBar">
        {activities.map(a => {
          return (
            <div
              className={`activity ${
                currentActivity == a && 'currentActivity'
              }`}
            >
              <span>{a}</span>
            </div>
          );
        })}
      </div>

      {/* This will show the days and indicaate current day */}
      <div className="dayBars">
        {dayBars.map(a => {
          return (
            <div className={`bar1 ${currentBar == a && 'currentBar'}`}></div>
          );
        })}
      </div>

      <div className="days">
        <div className="day1-3">Day 1 - 3</div>
        <div className="day4-5">Day 4 - 5</div>
        <div className="day6-7">Day 6 - 7</div>
      </div>
      {/* Button for collapsing/expanding will go here */}
      <div style={{ fontSize: '30px' }}>
        <UpCircleFilled />
      </div>
    </div>
  );
}
