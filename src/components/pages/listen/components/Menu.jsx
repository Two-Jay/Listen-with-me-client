import React from 'react';

import Audience from './Audience';
import Like from './Like';
import AlongContainer from '../containers/AlongContainer';

const Menu = () => {
  return (
    <div style={{ backgroundColor: 'lightcoral' }} className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="row">
            <Audience />
            <Like />
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <AlongContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
