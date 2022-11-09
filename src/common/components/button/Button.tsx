import React, { FC } from 'react';
import './button.scss';

type ButtonPropsType = {
  title: string
  action: () => void
}

export const Button: FC<ButtonPropsType> = ({ title, action }) => {
  return (
    <button className="button_container" onClick={action}>{title}</button>
  );
};
