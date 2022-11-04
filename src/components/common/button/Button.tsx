import React, { FC } from 'react';
import './button.scss';

type ButtonPropsType = {
  title: string
  action: () => void
}

export const Button: FC<ButtonPropsType> = ({ title, action }) => {
  return (
    <div
      onClick={action}
      className="button_container">
      <p>{title}</p>
    </div>
  );
};
