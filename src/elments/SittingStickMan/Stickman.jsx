'use client'
import React, { useState } from 'react';
import style from './Stickman.module.css';

const Stickman = () => {
  const [isPulling, setIsPulling] = useState(false);

  const handlePullWire = () => {
    setIsPulling(!isPulling);
  };

  return (
    <div className={style.stickman} onClick={handlePullWire}>
      <div className={style.head}></div>
      <div className={style.body}></div>
      <div className={`${style.arm} ${isPulling ? style.pulling : ''}`}></div>
      <div className={style.chair}></div>
      <div className={`${style.wire} ${isPulling ? style.moved : ''}`}></div>
    </div>
  );
};

export default Stickman;
