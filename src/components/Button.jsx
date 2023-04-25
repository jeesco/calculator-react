import React from 'react';
import '../styles/Button.css'

export default function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <button onClick={() => props.handleClick(props.children)} className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
      {props.children}
    </button>
  )
}