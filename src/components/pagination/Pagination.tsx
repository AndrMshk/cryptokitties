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

  const goToFirstPageHandler = () => {
    setPaginationParam({ itemsCount: limit_per_page, currentPage: 1 });
  };

  const goToPreviousPageHandler = () => {
    setPaginationParam({ itemsCount: limit_per_page, currentPage: prev_page });
  };

  const goToCurrentPageHandler = (page: number) => {
    current_page !== page &&
    setPaginationParam({ itemsCount: limit_per_page, currentPage: page });
  };

  const goToNextPageHandler = () => {
    setPaginationParam({ itemsCount: limit_per_page, currentPage: next_page });
  };

  const goToLastPageHandler = () => {
    setPaginationParam({ itemsCount: limit_per_page, currentPage: total_pages });
  };

  return (
    <div className="pagination_container">
      <div className="pagination_arrows">
        {current_page > 2 &&
        <div className="pagination_arrows-container">
          <div onClick={goToFirstPageHandler}>
            <IoPlayBackOutline />
          </div>
          <div onClick={goToPreviousPageHandler}>
            <IoChevronBackOutline />
          </div>
        </div>}
      </div>
      <div className="pagination_pages">
        {[prev_page, current_page, next_page].map((el, index) =>
          <div
            className={cn({ active: current_page === el })}
            onClick={() => goToCurrentPageHandler(el)}
            key={index}>
            {el}
          </div>)}
      </div>
      <div className="pagination_arrows">
        {current_page < total_pages - 1 &&
        <div className="pagination_arrows-container">
          <div onClick={goToNextPageHandler}>
            <IoChevronForward />
          </div>
          <div onClick={goToLastPageHandler}>
            <IoPlayForwardOutline />
          </div>
        </div>}
      </div>
    </div>
  );
};
