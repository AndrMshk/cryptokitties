import React, { FC } from 'react';
import { SortOrderType, SortParamType } from '../../api/types';
import './header.scss';
import { Button } from '../common/button/Button';

type HeaderPropsType = {
  isShowOptions: boolean
  sortParam: SortParamType
  setSortParam: (sortParam: SortParamType) => void
  sortOrder: SortOrderType
  setSortOrder: (sortOrder: SortOrderType) => void
}

const selectOptions = [
  {
    value: SortParamType.NULL,
    title: '',
  },
  {
    value: SortParamType.ID,
    title: 'Id',
  },
  {
    value: SortParamType.NAME,
    title: 'Name',
  },
  {
    value: SortParamType.CATEGORY,
    title: 'Category',
  },
  {
    value: SortParamType.PRICE,
    title: 'Price',
  },
];

export const Header: FC<HeaderPropsType> = ({
  isShowOptions,
  sortOrder,
  setSortOrder,
  sortParam,
  setSortParam,
}) => {

  const onChangeSortParamHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortParam(e.target.value as SortParamType);
  };

  const onChangeSortOrderHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setSortOrder(SortOrderType.ASC) : setSortOrder(SortOrderType.DESC);
  };

  const resetFiltersHandler = () => {
    setSortParam(SortParamType.NULL);
    setSortOrder(SortOrderType.NULL);
  };

  return (
    <header className="header_container">
      <h1>Cryptokitties</h1>
      {isShowOptions && <div className="header_sort-panel">
        <select name="filter" value={sortParam} onChange={onChangeSortParamHandler}>
          {selectOptions.map((el, index) => <option key={index} value={el.value}>{el.title}</option>)}
        </select>
        <input type="checkbox" checked={sortOrder !== SortOrderType.DESC} onChange={onChangeSortOrderHandler} />
       <Button title='Reset' action={resetFiltersHandler}/>
      </div>}
    </header>
  );
};
