import React from 'react';
import { Header } from '../../common';
import '../../../styles/less/ChangeYourAvatar.less';

const RenderChangeAvatar = () => {
  return (
    <>
      <Header displayMenu={true} />
      <div className="avatar-header">
        <h2>Choose your avatar</h2>
        <div className="avatar-cards-container">
          <div className="avatar-card">
            <div className="avatar-lighting-kid"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenderChangeAvatar;
