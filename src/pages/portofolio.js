import React from 'react';
import { porto1, porto2, porto3, porto4, porto5 } from '../asset';
import './stylePortofolio.css';

const Portofolio = () => {
  return (
    <div className="App">
      <div className="portofolio">
        <h2>Logo</h2>
        <div className="porto">
          <img className="porto" src={porto1} alt="" />
        </div>
        <h2>Ilustrasi</h2>
        <div className="porto">
          <img className="porto" src={porto2} alt="" />
          <img className="porto" src={porto3} alt="" />
          <img className="porto" src={porto4} alt="" />
          <img className="porto" src={porto5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
