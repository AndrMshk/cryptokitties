import React, { FC } from 'react';
import { PaginationOptions, PaginationParamType } from '../../../api/types';

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

  return (
    <div>
      <div>
        {current_page > 2 &&
        <div>
          <div onClick={() => {setPaginationParam({ itemsCount: limit_per_page, currentPage: 1 });}}>
            Start
          </div>
          <div onClick={() => {setPaginationParam({ itemsCount: limit_per_page, currentPage: prev_page });}}>
            previous...
          </div>
        </div>}
        {[prev_page, current_page, next_page].map((el, index) => <div
          onClick={() => {current_page !== el && setPaginationParam({ itemsCount: limit_per_page, currentPage: el });}}
          key={index}>
          {el}
        </div>)}
        {current_page < total_pages - 1 &&
        <div>
          <div onClick={() => {setPaginationParam({ itemsCount: limit_per_page, currentPage: next_page });}}>
            ...next
          </div>
          <div onClick={() => {setPaginationParam({ itemsCount: limit_per_page, currentPage: total_pages });}}>
            End
          </div>
        </div>}
      </div>
    </div>
  );
};
