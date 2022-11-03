import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextType } from '../api/types';
import { DataContext } from '../App';

export const ItemList = () => {

  const { data } = useContext<ContextType>(DataContext);

  const navigate = useNavigate();

  console.log(data);

  return (
    <div>
      <ul>
        {data.map(el => <li key={el.id}>
          <div onClick={() => {navigate(`/detailed/${el.id}`); }}>
            {el.name}
          </div>
          <img
            style={{ width: '100px' }}
            onError={() => {console.log(el.image_url);}}
            src={el.image_url}
            alt="cat_image"
          />
        </li>)}
      </ul>
    </div>
  );
};
