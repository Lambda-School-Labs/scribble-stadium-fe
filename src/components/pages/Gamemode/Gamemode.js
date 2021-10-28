import React, { useState, useEffect } from 'react';

import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';

const Gamemode = ({ ...props }) => {
  const { push, location } = useHistory();
  const [sP, setsP] = useState(false);

  useEffect(() => {
    const propInit = () => {
      if (props.child.gamemode !== null && location.pathname === '/gamemode') {
        props.child.gamemode = {
          mode: 'select',
          read: props.child.gamemode.read,
          write: props.child.gamemode.write,
          draw: props.child.gamemode.draw,
          sp: false,
        };
      } else {
        props.child.gamemode = {
          mode: 'select',
          read: false,
          write: false,
          draw: false,
          sp: false,
        };
      }
    };
    propInit();
  }, [props, location]);

  const singled = () => {
    if (location.pathname === '/gamemode' && sP === false) {
      push('/gamemode/single');

      props.child.gamemode = {
        mode: 'single',
        read: false,
        write: false,
        draw: false,
        sp: true,
      };
      console.log('nal gamemode singled', props.child);
      setsP(true);
    }
  };

  const reini = () => {
    // For basic prop initiation
    const ggm = {
      mode: 'select',
      read: false,
      write: false,
      draw: false,
      sp: false,
    };
    props.child.gamemode = ggm;
  };

  const startSinglePlayerMode = e => {
    e.preventDefault();
    push('/gameplay');
  };

  return (
    <div>
      {props.child.gamemode === null
        ? reini()
        : props.child.gamemode.mode === 'select' &&
          !props.child.gamemode.sp && (
            <div className="dash-container">
              <Header />
              <div className="single-button-container">
                <Button className="single-btn" onClick={startSinglePlayerMode}>
                  Single Player
                </Button>
                <Button className="multi-btn" onClick={startSinglePlayerMode}>
                  Multi Player
                </Button>
              </div>
            </div>
          )}
    </div>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(Gamemode);
