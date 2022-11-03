import React, { useContext } from 'react';
import { ContextType } from '../../api/types';
import { DataContext } from '../app/App';
import { Item } from './item/Item';

export const ItemList = () => {

  const { data } = useContext<ContextType>(DataContext);

  return (
    <div>
      {data.map(el => <Item key={el.id} {...el} />)}
    </div>
  );
};
