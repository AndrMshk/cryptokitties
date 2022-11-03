import React, { useContext, useEffect, useState } from 'react';
import { API } from '../api/api';
import axios from 'axios';
import { ContextType, ItemType } from '../api/types';
import { DataContext } from '../App';
import { useParams } from 'react-router-dom';

export const Item = () => {

  const { itemId } = useParams();

  const { setError, setIsLoading, setIsShowOptions } = useContext<ContextType>(DataContext);

  const [currentItem, setCurrentItem] = useState<ItemType | null>(null);

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
      <img src={currentItem?.image_url} alt="img" />
    </div>
  );
};
