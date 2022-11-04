import React, { FC, useState } from 'react';
import { SortOrderType, SortParamType } from '../../api/types';
import './header.scss';
import { SortPanel } from '../../common/components/sortPanel/SortPanel';
import { Button } from '../../common/components/button/Button';

type HeaderPropsType = {
  isShowOptions: boolean
  sortParam: SortParamType
  setSortParam: (sortParam: SortParamType) => void
  sortOrder: SortOrderType
  setSortOrder: (sortOrder: SortOrderType) => void
}

export const Header: FC<HeaderPropsType> = ({ isShowOptions, ...restProps }) => {

  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  return (
    <header className="header_container">
      <h1>Cryptokitties</h1>
      {isShowOptions &&
      <div className="header_sort-panel">
        {isShowMenu
          ? <SortPanel {...restProps} setIsShowMenu={setIsShowMenu} />
          : <Button title="Sort" action={() => {setIsShowMenu(!isShowMenu);}} />}
      </div>}
    </header>
  );
};
