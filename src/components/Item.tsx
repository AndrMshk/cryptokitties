import React, { useContext, useEffect, useState } from 'react';
import { API } from '../api/api';
import axios from 'axios';
import { ContextType, ItemType } from '../api/types';
import { DataContext } from '../App';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

export const Item = () => {

  const { itemId } = useParams();

  const { setError, setIsLoading, setIsShowOptions } = useContext<ContextType>(DataContext);

  const [currentItem, setCurrentItem] = useState<ItemType | null>(null);

  console.log(currentItem);

  const getItem = async() => {
    try {
      setIsLoading(true);
      const res = await API.getItem(itemId || '');
      setCurrentItem(res.data);
    } catch (e) {
      axios.isAxiosError(e)
        ? e && setError(e.message)
        : setError('Some error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsShowOptions(false);
    getItem();
    return () => {setIsShowOptions(true);};
  }, []);

  return (
    <div>
      <div>{currentItem?.name}</div>
      <div>{currentItem?.category}</div>
      <div>{currentItem?.price}</div>
      <img src={currentItem?.image_url} alt="cat_image" />
      <div>Created: {dayjs(currentItem?.created_at).format('DD MMMM YYYY')}</div>
      <div>Updated: {dayjs(currentItem?.updated_at).format('DD MMMM YYYY')}</div>
      {currentItem?.available && <div>available</div>}
    </div>
  );
};
