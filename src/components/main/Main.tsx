import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CurrentItem } from '../currentItem/CurrentItem';
import { ItemList } from '../itemList/ItemList';
import { ErrorPage } from '../../common/components/errorPage/ErrorPage';

export const Main = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={'/itemlist'} />} />
      <Route path={'/itemlist'} element={<ItemList />} />
      <Route path={'/detailed/:itemId'} element={<CurrentItem />} />
      <Route path={'/404'} element={<ErrorPage />} />
      <Route path={'*'} element={<Navigate to={'/404'} />} />
    </Routes>
  );
};


