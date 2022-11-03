import React, { FC } from 'react';
import { PaginationOptions, PaginationParamType } from '../../api/types';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../common/pagination/Pagination';

type FooterPropsType = {
  isShowOptions: boolean
  paginationOptions: PaginationOptions
  setPaginationParam: (paginationParam: PaginationParamType) => void
}

export const Footer: FC<FooterPropsType> = ({ isShowOptions, ...restProps }) => {

  const navigate = useNavigate();

  return (
    <footer>
      <div>Footer</div>
      {isShowOptions
        ? <Pagination {...restProps} />
        : <button onClick={() => {navigate('/itemlist');}}>back</button>
      }
    </footer>
  );
};
