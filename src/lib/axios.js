import React from "react";
import axios from "axios";
import Interceptor from "./interceptor";

const http = axios.create({
  baseURL: '/'
})

new Interceptor(http)
React.http = http
