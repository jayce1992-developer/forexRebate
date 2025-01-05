import React from "react";
import md5 from "js-md5";
import { Base64 } from "js-base64";

class Interceptor {
  constructor(http) {
    this.config = this.configFun()
    this.request(http)
    this.response(http)
  }
  configFun() {
    return {
      getHeaders: (request) => {
        const headerConfig = {
          aid: '',
          qid: md5(Date.now() + Math.random().toString().split('.')[1].slice(0, 6)),
          Accept: 'application/json',
          ts: Date.now(),
          sign: function() {
            return 'test'
          }
        }

        for(let i in headerConfig) {
          const val = headerConfig[i]
          if(val) {
            request.headers[i] = typeof val === 'function' ? val.bind(headerConfig) : val
          }
        }
      }
    }
  }
  request(http) {
    http.interceptor.request.use(
      async (request) => {
        request.data = request.data || {}
        this.config.getHeaders(request)
        return request
      },
      error => {
        return Promise.reject(error)
      }
    )
  }
  response(http) {
    http.interceptor.response.use(
      async (response) => {
        return response
      },
      error => {
        return Promise.reject(error)
      }
    )
  }
}

export default Interceptor