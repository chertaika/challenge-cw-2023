import { apiSettings } from './constants';

const { baseUrl, headers, endpoints: { dataEndpoint } } = apiSettings;
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

const getInitialData = async () => {
  const res = await fetch(`${baseUrl}${dataEndpoint}`, { headers });
  return checkResponse(res);
};

export default getInitialData;
