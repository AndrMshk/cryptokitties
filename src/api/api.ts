import axios, { AxiosResponse } from 'axios';
import { ItemType, RequestParamsType, ResponseType } from './types';

const instance = axios.create({ baseURL: 'https://ftl-cryptokitties.fly.dev/api' });

export const API = {
  getItems(params: RequestParamsType) {
    return instance.get<RequestParamsType, AxiosResponse<ResponseType>>(`/crypto_kitties`,
      { params: { ...params } });
  },
  getItem(itemId: string) {
    return instance.get <{ itemId: string }, AxiosResponse<ItemType>>(`/crypto_kitties/${itemId}`);
  },
};



