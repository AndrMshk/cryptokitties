import React, { FC } from 'react';
import { ItemType } from '../../../api/types';
import { useNavigate } from 'react-router-dom';

export const Item: FC<ItemType> = ({
  image_url,
  updated_at,
  created_at,
  id,
  name,
  available,
  category,
  price,
}) => {

  const navigate = useNavigate();

  return (
    <div>
      <div onClick={() => {navigate(`/detailed/${id}`); }}>
        {name}
      </div>
      <img
        style={{ width: '100px' }}
        onError={() => {console.log(image_url);}}
        src={image_url}
        alt="cat_image"
      />
    </div>
  );
};
