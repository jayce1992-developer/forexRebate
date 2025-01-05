import React from "react";

export const commonCofig = (params) => {
  return React.http.post('/test', params)
}

