import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Item } from './Item';
import { ItemList } from './ItemList';
import { ErrorPage } from './common/ErrorPage';

export const Main = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={'/itemlist'} />} />
      <Route path={'/itemlist'} element={<ItemList />} />
      <Route path={'/detailed/:itemId'} element={<Item />} />
      <Route path={'/404'} element={<ErrorPage />} />
      <Route path={'*'} element={<Navigate to={'/404'} />} />
    </Routes>
  );
};


