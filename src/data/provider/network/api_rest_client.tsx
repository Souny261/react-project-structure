import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiEndpoint } from "./api_endpoint";

axios.defaults.headers.common.Accept = "application/json";
axios.defaults.timeout = 12000;

const axiosInstance = axios.create({
  baseURL: ApiEndpoint.dev,
  responseType: "json",
});
const getHttpHeaders = (isAuthenticated = false): AxiosRequestConfig => {
  // Add your custom logic here, for example add a Token to the Headers
  if (isAuthenticated) {
    return {
      headers: {
        Authorization: "Bearer YOUR_TOKEN",
      },
    };
  }

  return {};
};

const get = (path: string): Promise<AxiosResponse> =>
  axiosInstance.get(path, getHttpHeaders());

const del = (path: string): Promise<AxiosResponse> =>
  axiosInstance.delete(path, getHttpHeaders());

const post = (path: string, data: any): Promise<AxiosResponse> =>
  axiosInstance.post(path, data, getHttpHeaders());

const put = (path: string, data: any): Promise<AxiosResponse> =>
  axiosInstance.post(path, data, getHttpHeaders());

const patch = (path: string, data: any): Promise<AxiosResponse> =>
  axiosInstance.post(path, data, getHttpHeaders());

export default {
  get,
  del,
  post,
  put,
  patch,
};
