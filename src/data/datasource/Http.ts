import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from 'axios';
import config from '../../config/config';
import { HttpManager } from './interface/HttpManager';

export class AxiosHttpManager implements HttpManager {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: config.api.baseEndpoint,
    });

    this.http.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        config.headers['Content-Type'] = !config.headers['Content-Type']
          ? 'application/json'
          : config.headers['Content-Type'];
        return config;
      },
      (error: AxiosError) => {
        console.log(error);
        return Promise.reject(error);
      },
    );
    this.http.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response?.status === HttpStatusCode.Unauthorized) {
          //TODO: Do something
          console.log('Revoke login');
        }
        const errorResponseData = error.response?.data;
        return Promise.reject({ ...Object(errorResponseData), httpStatus: error.response?.status });
      },
    );
  }

  public rawRequest(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.request(config);
  }

  public async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    const response = this.http.get(url, config);
    return response;
  }

  public post(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    const response = this.http.post(url, data, config);
    return response;
  }

  public put(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    const response = this.http.put(url, data, config);
    return response;
  }

  public delete(url: string): Promise<AxiosResponse> {
    const response = this.http.delete(url);
    return response;
  }
}
