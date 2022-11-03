import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { ErrorMessage } from './components/common/ErrorMessage';
import { Loading } from './components/common/Loading';
import { API } from './api/api';
import axios from 'axios';
import {
  ContextType,
  ErrorType,
  ItemType,
  PaginationOptions,
  PaginationParamType,
  SortOrderType,
  SortParamType,
} from './api/types';

export const DataContext = React.createContext<ContextType>({} as ContextType);

function App() {

  const initialPaginationParam = { currentPage: 1, itemsCount: 20 };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowOptions, setIsShowOptions] = useState<boolean>(true);
  const [data, setData] = useState<ItemType[]>([]);
  const [error, setError] = useState<ErrorType>(null);
  const [paginationParam, setPaginationParam] = useState<PaginationParamType>(initialPaginationParam);
  const [paginationOptions, setPaginationOptions] = useState<PaginationOptions>({} as PaginationOptions);
  const [sortParam, setSortParam] = useState<SortParamType>(SortParamType.NULL);
  const [sortOrder, setSortOrder] = useState<SortOrderType>(SortOrderType.NULL);

  const getItems = async() => {
    try {
      setIsLoading(true);
      const res = await API.getItems({
        page: paginationParam.currentPage,
        per_page: paginationParam.itemsCount,
        sort_by: !!sortParam ? sortParam : undefined,
        sort_dir: !!sortOrder ? sortOrder : undefined,
      });
      setData(res.data.cats);
      setPaginationOptions(res.data.pagination_info);
    } catch (e) {
      axios.isAxiosError(e)
        ? e && setError(e.message)
        : setError('Some error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {getItems();}, [paginationParam, sortParam, sortOrder]);

  return (
    <div>
      <DataContext.Provider value={{
        setIsLoading,
        setIsShowOptions,
        data,
        setError,
      }}>
        <Header
          isShowOptions={isShowOptions}
          sortParam={sortParam}
          setSortParam={setSortParam}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <Main />
        <Footer
          isShowOptions={isShowOptions}
          paginationOptions={paginationOptions}
          setPaginationParam={setPaginationParam}
        />
      </DataContext.Provider>
      {error && <ErrorMessage error={error} setError={setError} />}
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
