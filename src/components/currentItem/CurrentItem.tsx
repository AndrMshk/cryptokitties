import React, { useContext, useLayoutEffect, useState } from 'react';
import { API } from '../../api/api';
import axios from 'axios';
import { ContextType, ItemType } from '../../api/types';
import { DataContext } from '../app/App';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import './currentItem.scss';

export const CurrentItem = () => {

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

  useLayoutEffect(() => {
    setIsShowOptions(false);
    getItem();
    return () => {setIsShowOptions(true);};
  }, []);

  return (
    <div className="current-item_container">
      <h3>{currentItem?.name}</h3>
      <img src={currentItem?.image_url} alt="cat_image" />
      <div className="current-item_info">
        <h4>Info</h4>
        {currentItem?.available &&
        <div className="current-item_info__available">
          <svg width="10" height="10" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M6.69847 4.58917C7.42954 2.93067 8.81989 0 9.51609 0C10.5271 -0.001 12.7418 5.686 12.7418 5.686C12.7418 5.686 14.792 5.865 16.449 6.048C17.3287 6.145 18.8994 6.293 18.9977 6.778C19.0188 6.883 18.8924 7.312 18.6627 7.611C17.6898 8.881 15.1652 11.602 15.1652 11.602C15.1652 11.602 15.3036 12.902 15.4269 14.324C15.5062 15.244 15.7198 17.108 15.6426 17.441C15.5583 17.808 15.4069 17.908 15.2494 17.966C14.8382 18.116 13.8833 17.533 12.7679 16.999C11.2483 16.27 9.54117 15.491 9.54117 15.491C9.54117 15.491 8.41476 16.08 7.07973 16.655C5.65343 17.269 4.20906 18.281 3.60624 17.925C3.23011 17.702 3.50895 15.964 3.65338 14.417C3.78879 12.958 3.90615 11.625 3.90615 11.625C3.90615 11.625 3.06962 10.643 2.09568 9.593C1.0435 8.458 -0.239372 7.233 0.0384672 6.783C0.2481 6.443 1.20499 6.261 2.81184 6.062C4.519 5.85 6.22415 5.7 6.22415 5.7C6.22415 5.7 6.40998 5.24364 6.69847 4.58917Z"
                  fill="#337ab7" />
          </svg>
        </div>}
        <div>
          <div>Category: {currentItem?.category}</div>
          <div>Price: {currentItem?.price}</div>
          <div>Created: {dayjs(currentItem?.created_at).format('DD MMMM YYYY')}</div>
          <div>Updated: {dayjs(currentItem?.updated_at).format('DD MMMM YYYY')}</div>
        </div>
      </div>
    </div>
  );
};
