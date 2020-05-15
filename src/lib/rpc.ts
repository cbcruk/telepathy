import axios, { AxiosRequestConfig } from 'axios'
import html2document from './html2document'

const instance = axios.create({
  baseURL: 'https://m.search.daum.net',
})

async function rpc(url: string, config?: AxiosRequestConfig) {
  const { data } = await instance.get<string>(url, config)
  const document = html2document(data)

  return document
}

export default rpc
