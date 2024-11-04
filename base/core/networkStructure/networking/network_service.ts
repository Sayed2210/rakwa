import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { AxiosInstance } from 'axios'
import HeaderHandler from '~/base/core/networkStructure/networking/utils/header_handler'
import type PostParams from '~/base/core/Params/post_params'
import type GetParams from '~/base/core/Params/get_params'
// Network service for HTTP requests
export default class NetworkService {
  private axiosInstance: AxiosInstance
  private static _instance: NetworkService

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com'
    })
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new NetworkService()
    }
    return this._instance
  }

  async post({
    url,
    data,
    headers,
    queryParams,
    isAuth = false
  }: PostParams): Promise<AxiosResponse> {
    return this.axiosInstance.post(url, data, {
      headers: headers ?? HeaderHandler.getInstance().getHeader(isAuth),
      params: queryParams
    })
  }

  async get({ url, headers, queryParams, isAuth = false }: GetParams): Promise<AxiosResponse> {
    return this.axiosInstance.get(url, {
      headers: headers ?? HeaderHandler.getInstance().getHeader(isAuth),
      params: queryParams
    })
  }
}
