import React, { FC } from 'react';
import { PaginationOptions, PaginationParamType } from '../../api/types';
import './pagination.scss';
import cn from 'classnames';
import { IoChevronBackOutline, IoChevronForward, IoPlayBackOutline, IoPlayForwardOutline } from 'react-icons/io5';

type PaginationPropsType = {
  paginationOptions: PaginationOptions
  setPaginationParam: (paginationParam: PaginationParamType) => void
}

export const Pagination: FC<PaginationPropsType> = ({ paginationOptions, setPaginationParam }) => {

  const {
    current_page,
    limit_per_page,
    next_page,
    prev_page,
    total_pages,
  } = paginationOptions;

  const goToPageHandler = (page: number) => {
    setPaginationParam({ itemsCount: limit_per_page, currentPage: page });
  };

  return (
    <div className="pagination_container">
      <div className="pagination_arrows">
        {current_page > 2 &&
        <div className="pagination_arrows-container">
          <div onClick={() => {goToPageHandler(1);}}>
            <IoPlayBackOutline />
          </div>
          <div onClick={() => {goToPageHandler(current_page - 1);}}>
            <IoChevronBackOutline />
          </div>
        </div>}
      </div>
      <div className="pagination_pages">
        {[prev_page, current_page, next_page].map((el, index) =>
          <div
            className={cn({ active: current_page === el })}
            onClick={() => goToPageHandler(el)}
            key={index}>
            {el}
          </div>)}
      </div>
      <div className="pagination_arrows">
        {current_page < total_pages - 1 &&
        <div className="pagination_arrows-container">
          <div onClick={() => {goToPageHandler(current_page + 1);}}>
            <IoChevronForward />
          </div>
          <div onClick={() => {goToPageHandler(total_pages);}}>
            <IoPlayForwardOutline />
          </div>
        </div>}
      </div>
    </div>
  );
};
