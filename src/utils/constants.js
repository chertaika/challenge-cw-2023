const DATA_ENDPOINT = 'catalog.json';
const BASE_URL = 'http://contest.elecard.ru/frontend_data/';

const ELLIPSIS = '...';

const REQUEST_ERROR_MESSAGE = 'Что-то пошло не так... Попробуйте позже.';
const CARDS_PER_PAGE = 12;

const CARDS_TYPE = 'cards';
const TREE_TYPE = 'tree';

const apiSettings = {
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  endpoints: {
    dataEndpoint: DATA_ENDPOINT,
  },
};

const typesOfSorting = {
  title: 'по названию',
  timestamp: 'по дате',
  filesize: 'по размеру',
  category: 'по категории',
};

const ERROR = 'Ошибка';

export {
  apiSettings,
  ERROR,
  BASE_URL,
  ELLIPSIS,
  CARDS_PER_PAGE,
  typesOfSorting,
  CARDS_TYPE,
  TREE_TYPE,
  REQUEST_ERROR_MESSAGE,
};
