import React from 'react';
import '../styles/ClearButton.css'

export default function ClearButton(props) {
  return (
      <button onClick={props.handleClear} className='clear-button'>
        {props.children}
      </button>
  )
}