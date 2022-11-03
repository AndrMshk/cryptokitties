import React, { FC } from 'react';
import { ErrorType } from '../../api/types';

type ErrorMessagePropsType = {
  error: ErrorType
  setError: (error: ErrorType) => void
}

export const ErrorMessage: FC<ErrorMessagePropsType> = ({}) => {
  return (
    <>
      <div>ErrorMessage</div>
    </>
  );
};
