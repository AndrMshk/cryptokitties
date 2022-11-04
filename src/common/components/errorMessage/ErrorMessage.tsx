import React, { FC } from 'react';
import { ErrorType } from '../../../api/types';
import './error-message.scss';
import { Button } from '../button/Button';

type ErrorMessagePropsType = {
  error: ErrorType
  setError: (error: ErrorType) => void
}

export const ErrorMessage: FC<ErrorMessagePropsType> = ({ error, setError }) => {
  return (
    <div className="error-message_container">
      <div className="error-message_modal">
        <h1>{error}</h1>
        <Button title="OK" action={() => {setError(null);}} />
      </div>
    </div>
  );
};
