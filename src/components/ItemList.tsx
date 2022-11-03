import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextType } from '../api/types';
import { DataContext } from '../App';

export const ItemList = () => {

  const { data } = useContext<ContextType>(DataContext);

  const navigate = useNavigate();

  return (
    <div>
      <ul>
        {data.map(el => <li key={el.id}>
          <div
            onClick={() => {navigate(`/detailed/${el.id}`); }}
          >{el.name}</div>
          <div><img src={el.image_url} alt="ee" /></div>
        </li>)}
      </ul>
    </div>
  );
};
