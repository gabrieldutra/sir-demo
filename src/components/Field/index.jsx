import React, { useState, useCallback, useEffect } from 'react';
import Pig from '../Pig';

import './Field.css';

function usePigGenerator(percentageOfPigs, width, height) {
  const [pigs, setPigs] = useState([]);
  useEffect(() => {
    const listOfPigs = [];
    const numberOfPigs = Math.floor(((width*height)/(64*64))*(percentageOfPigs/100));
    for(let i = 0; i < numberOfPigs; i++) {
      let status = 'S';
      if (i%3 === 1) {
        status = 'I';
      } else if (i%3 === 2) {
        status = 'R';
      }
      listOfPigs.push({
        key: i,
        posX: Math.random()*(width - 64),
        posY: Math.random()*(height - 64),
        status,
      });
    }
    setPigs(listOfPigs);
  }, [percentageOfPigs, width, height]);
  return pigs;
}

function Field({ percentageOfPigs }) {
  const [fieldSize, setFieldSize] = useState(0);
  const fieldRef = useCallback(node => {
    if (node) {
      setFieldSize(node.getBoundingClientRect());
      console.log(node.getBoundingClientRect());
    }
  }, []);

  const pigs = usePigGenerator(percentageOfPigs, fieldSize.width, fieldSize.height);
  return (
    <div ref={fieldRef} className="Field">
      {pigs.map(pig => <Pig status="I" {...pig} />)}
    </div>
  );
}

export default Field;
