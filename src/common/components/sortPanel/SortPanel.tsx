import React, { FC, useState } from 'react';
import './sort-panel.scss';
import { SortOrderType, SortParamType } from '../../../api/types';
import { Button } from '../button/Button';
import { TbArrowDownCircle } from 'react-icons/tb';
import cn from 'classnames';

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

  const onChangeSortOrderHandler = () => {
    sortData.sortOrder === SortOrderType.DESC
      ? setSortData({ ...sortData, sortOrder: SortOrderType.ASC })
      : setSortData({ ...sortData, sortOrder: SortOrderType.DESC });
  };

  const setSortHandler = (isReset: boolean) => {
    setSortParam(isReset ? SortParamType.NULL : sortData.sortParam);
    setSortOrder(isReset ? SortOrderType.NULL : sortData.sortOrder);
    setIsShowMenu(false);
  };

  return (
    <div className="sort-panel_container">
      <form className="sort-panel_form">
        <div className="sort-panel_controls">
          <div className="sort-panel_controls__radio">
            {selectOptions.map((el, index) =>
              <div className="sort-panel_controls__radio-button" key={index}>
                <input
                  onChange={onChangeSortParamHandler}
                  type="radio"
                  id={el.value}
                  value={el.value}
                  checked={sortData.sortParam === el.value} />
                <label htmlFor={el.value}>{el.title}</label>
              </div>)}
          </div>
          <div
            onClick={onChangeSortOrderHandler}
            className={
              cn(['sort-panel_controls__arrow'],
                { ['sort-panel_controls__arrow-desc']: sortData.sortOrder === SortOrderType.DESC })}>
            <TbArrowDownCircle />
          </div>
        </div>
        <Button title="Ok" action={()=>{setSortHandler(false)}} />
      </form>
      <Button title="Reset" action={()=>{setSortHandler(true)}} />
    </div>
  );
};
