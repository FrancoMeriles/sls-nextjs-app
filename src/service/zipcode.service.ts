import ApiClient from './apiClient'

class ZipCode {
  apiClient: any
  request: any
  constructor() {
    this.apiClient = new ApiClient('https://ipgeolocation.abstractapi.com')
    this.request = this.apiClient.request()
  }

  async getZipCode(): Promise<any> {
    return this.request.get('/v1/', {
      params: {
        api_key: process.env.NEXT_PUBLIC_PRODUCTION_API_ZIPCODE,
      },
    })
  }
}

export default ZipCode
