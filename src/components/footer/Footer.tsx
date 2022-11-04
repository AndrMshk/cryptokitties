import React, { FC } from 'react';
import { PaginationOptions, PaginationParamType } from '../../api/types';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../pagination/Pagination';
import './footer.scss';
import { Button } from '../../common/components/button/Button';

type FooterPropsType = {
  isShowOptions: boolean
  paginationOptions: PaginationOptions
  setPaginationParam: (paginationParam: PaginationParamType) => void
}

export const Footer: FC<FooterPropsType> = ({ isShowOptions, ...restProps }) => {

  const navigate = useNavigate();

  return (
    <footer className="footer_container">
      {isShowOptions
        ? <Pagination {...restProps} />
        : <Button title="Back" action={() => {navigate('/itemlist');}} />}
    </footer>
  );
};
