import React, { useState, useEffect } from 'react';
import './CardChef.scss';


const Timer = () => {

const [second, setSecond] = useState('00');
const [minute, setMinute] = useState('00');
const [isActive, setIsActive] = useState(false);
const [counter, setCounter] = useState(0);


    useEffect(() => {
      let intervalId;

      if (isActive) {
        intervalId = setInterval(() => {
          const secondCounter = counter % 60;
          const minuteCounter = Math.floor(counter / 60);

          const computedSecond =
            String(secondCounter).length === 1
              ? `0${secondCounter}`
              : secondCounter;
          const computedMinute =
            String(minuteCounter).length === 1
              ? `0${minuteCounter}`
              : minuteCounter;

          setSecond(computedSecond);
          setMinute(computedMinute);

          setCounter((counter) => counter + 1);
        }, 1000);
      }

      return () => clearInterval(intervalId);
    }, [isActive, counter]);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
      <div className="cardchef-btns">
        <button onClick={handleClick} className="status-btn" style={{backgroundColor: !isActive ? "#f29f05" : "#FF1E00" }}>
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button className="status-btn">
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </button>
      </div>
    );
  };

export default Timer;

