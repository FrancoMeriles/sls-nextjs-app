import axios, { AxiosResponse, AxiosInstance } from 'axios'

class ApiClient {
  instance: AxiosInstance
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
    })
  }

  responseBody(response: AxiosResponse) {
    return response.data
  }

  request() {
    return {
      get: (url: string) => this.instance.get(url).then(this.responseBody),
      post: (url: string, body: unknown) => this.instance.post(url, body).then(this.responseBody),
      put: (url: string, body: unknown) => this.instance.put(url, body).then(this.responseBody),
      delete: (url: string) => this.instance.delete(url).then(this.responseBody),
    }
  }
}

export default ApiClient
