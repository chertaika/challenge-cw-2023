const DATA_ENDPOINT = 'catalog.json';
const BASE_URL = 'http://contest.elecard.ru/frontend_data/';
const apiSettings = {
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  endpoints: {
    dataEndpoint: DATA_ENDPOINT,
  },
};

const ERROR = 'Ошибка';

export { apiSettings, ERROR, BASE_URL };
