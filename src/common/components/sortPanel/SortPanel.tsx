import React, { FC, useState } from 'react';
import './sort-panel.scss';
import { SortOrderType, SortParamType } from '../../../api/types';
import { Button } from '../button/Button';

type SortPanelPropsType = {
  sortParam: SortParamType
  setSortParam: (sortParam: SortParamType) => void
  sortOrder: SortOrderType
  setSortOrder: (sortOrder: SortOrderType) => void
  setIsShowMenu: (isShowMenu: boolean) => void
}

type SortDataType = {
  sortParam: SortParamType
  sortOrder: SortOrderType
}

type SelectOptionsType = {
  value: SortParamType
  title: string
}

const selectOptions: SelectOptionsType[] = [
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

export const SortPanel: FC<SortPanelPropsType> = ({
  setSortOrder,
  setSortParam,
  sortOrder,
  sortParam,
  setIsShowMenu,
}) => {

  const [sortData, setSortData] = useState<SortDataType>({ sortParam, sortOrder });

  const onChangeSortParamHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortData({ ...sortData, sortParam: e.target.value as SortParamType });
  };

  const onChangeSortOrderHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setSortData({ ...sortData, sortOrder: SortOrderType.ASC })
      : setSortData({ ...sortData, sortOrder: SortOrderType.DESC });
  };

  const resetFiltersHandler = () => {
    setSortParam(SortParamType.NULL);
    setSortOrder(SortOrderType.NULL);
    setIsShowMenu(false);
  };

  const setSortParamHandler = () => {
    setSortParam(sortData.sortParam);
    setSortOrder(sortData.sortOrder);
    setIsShowMenu(false);
  };

  return (
    <div className="sort-panel_container">
      <div className="sort-panel_form">
        <div className="sort-panel_controls">
          <div className="sort-panel_controls__radio">
            {selectOptions.map((el, index) =>
              <div className="sort-panel_controls__radio-button" key={index}>
                <input
                  onChange={onChangeSortParamHandler}
                  type="radio"
                  title={el.title}
                  value={el.value}
                  checked={sortData.sortParam === el.value} />
                <p>{el.title}</p>
              </div>)}
          </div>
          <input
            type="checkbox"
            checked={sortData.sortOrder !== SortOrderType.DESC}
            onChange={onChangeSortOrderHandler} />
        </div>
          <Button title="Ok" action={setSortParamHandler} />
      </div>
      <Button title="Reset" action={resetFiltersHandler} />
    </div>
  );
};
