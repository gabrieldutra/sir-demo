import React from 'react';
import { Tooltip } from 'antd';
import pig from '../../images/pig.png';

import './Pig.css';

function Pig({ status, posX, posY }) {
  let tooltip = "Suscetível";
  if (status === 'I') {
    tooltip = 'Infectado';
  } if (status === 'R') {
    tooltip = 'Recuperado';
  }
  return (
    <Tooltip title={tooltip}>
      <img
        className="Pig"
        style={{position: 'absolute', left: posX, top: posY }}
        src={pig}
        width={64}
        alt="Pig"
        data-status={status}
      />
    </Tooltip>
  )
}

export default Pig;