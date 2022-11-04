import React, { useContext } from 'react';
import { ContextType } from '../../api/types';
import { DataContext } from '../app/App';
import { Item } from './item/Item';
import './ItemList.scss';

export const ItemList = () => {

  const { data } = useContext<ContextType>(DataContext);

  return (
    <div className="list_container">
      {data.map(el => <Item key={el.id} {...el} />)}
    </div>
  );
};
