import React, { FC } from 'react';
import { PaginationOptions, PaginationParamType } from '../api/types';
import { useNavigate } from 'react-router-dom';

type FooterPropsType = {
  isShowOptions: boolean
  paginationOptions: PaginationOptions
  setPaginationParam: (paginationParam: PaginationParamType) => void
}

export const Footer: FC<FooterPropsType> = ({ isShowOptions, paginationOptions, setPaginationParam }) => {

  const navigate = useNavigate();

  return (
    <footer>
      <div>Footer</div>
      {isShowOptions
        ? <div>
          ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </div>
        : <button onClick={() => {navigate('/itemlist');}}>back</button>
      }
    </footer>
  );
};
