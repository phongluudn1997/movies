import axios from 'axios'
const apiURL = process.env.REACT_APP_API_URL
const apiToken = process.env.REACT_APP_TOKEN

function client(
  endpoint,
  {data, headers: customHeaders, ...customConfig} = {},
) {
  const config = {
    method: data ? 'post' : 'get',
    url: `${apiURL}/${endpoint}`,
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    data,
    ...customConfig,
  }
  return axios(config)
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}

export {client}
