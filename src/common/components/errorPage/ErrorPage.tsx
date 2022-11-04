import React, { useContext, useEffect } from 'react';
import './error-page.scss';
import { Button } from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { ContextType } from '../../../api/types';
import { DataContext } from '../../../components/app/App';

export const ErrorPage = () => {

  const navigate = useNavigate();

  const { setIsErrorRoute } = useContext<ContextType>(DataContext);

  useEffect(() => {
    setIsErrorRoute(true);
    return () => {setIsErrorRoute(false);};
  }, []);

  return (
    <div className="error-page_container">
      <h1>Error 404</h1>
      <Button title="Back" action={() => {navigate('/itemlist');}} />
    </div>
  );
};
