import React from 'react';
import './Button.css';
import { Button } from './Button.jsx';


export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  return (
    <button
      className={`btn ${buttonStyle} ${buttonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};