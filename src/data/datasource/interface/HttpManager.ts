import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface HttpManager {
  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
  post(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse>;
  put(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse>;
  delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
  rawRequest(config: AxiosRequestConfig): Promise<AxiosResponse>;
}
