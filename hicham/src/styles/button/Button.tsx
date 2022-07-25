import React, { MouseEventHandler } from 'react';
import './btn.css'

export interface ButtonProps {
    label: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }

const Button = (props: ButtonProps) => {
  return (
    <div className="wrap">
      <button className="button_refresh" onClick={props.onClick}>{props.label}</button>
    </div>
  )
}

export default Button
