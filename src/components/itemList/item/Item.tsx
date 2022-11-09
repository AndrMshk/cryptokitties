import React, { FC, SyntheticEvent, useState } from 'react';
import { ItemType } from '../../../api/types';
import { useNavigate } from 'react-router-dom';
import './item.scss';
import ava from '../../../assets/cat.png';

export const Item: FC<ItemType> = ({ image_url, id, name, price }) => {

  const [isValidImage, setIsValidImage] = useState(true);

  const navigate = useNavigate();

  const errorHandler = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    (event.target as HTMLImageElement).src = ava;
    setIsValidImage(false);
  };

  return (
    <div onClick={() => {navigate(`/detailed/${id}`); }} className="item_container">
      <div className="item_title">{name}</div>
      <img
        style={{ padding: !isValidImage ? '50px' : undefined }}
        onError={errorHandler} src={image_url} alt="photo" />
      <div>Price: {price}</div>
    </div>
  );
};
