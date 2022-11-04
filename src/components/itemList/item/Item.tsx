import React, { FC, useState } from 'react';
import { ItemType } from '../../../api/types';
import { useNavigate } from 'react-router-dom';
import './item.scss';
// @ts-ignore
import ava from '../../../assets/cat.png';

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

  const [isValidPicture, setIsValidPicture] = useState<boolean>(true);

  return (
    <div
      onClick={() => {navigate(`/detailed/${id}`); }}
      className="item_container">
      <div className="item_title">{name}</div>
      {isValidPicture
        ? <img
          onError={() => {setIsValidPicture(false);}}
          src={image_url}
          alt="cat_image" />
        : <img
          src={ava}
          alt="cat_image" />}
      <div>Price: {price}</div>
    </div>
  );
};
