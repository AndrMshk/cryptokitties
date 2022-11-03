import React, { FC } from 'react';
import { SortOrderType, SortParamType } from '../api/types';

type HeaderPropsType = {
  isShowOptions: boolean
  sortParam: SortParamType
  setSortParam: (sortParam: SortParamType) => void
  sortOrder: SortOrderType
  setSortOrder: (sortOrder: SortOrderType) => void
}

export const Header: FC<HeaderPropsType> = ({
  isShowOptions,
  sortOrder,
  setSortOrder,
  sortParam,
  setSortParam,
}) => {

  return (
    <header>
      <h1>Cryptokitties</h1>
      {isShowOptions &&
      <div>ssssdasdasdasdadsasdasda</div>
      }
    </header>
  );
};
