import { BASE_URL } from '../utils/constants';

const useFormatData = (data) => {
  // преобразуем данные для упрощения дальнейшей работы с ними
  const formatObject = obj => ({
    image: `${BASE_URL}${obj.image}`,
    title: obj.image.split('/').pop().split('.')[0],
    date: new Date(obj.timestamp).toLocaleString().replace(',', ''),
    humanFilesize: `${(obj.filesize / 1024).toFixed(2)} Кбайт`,
    timestamp: obj.timestamp,
    category: obj.category,
    filesize: obj.filesize,
  });

  const arrOfIndex = [];

  // удаляем дубликаты без уникальных идентификаторов
  return data.reduce((acc, current) => {
    if (arrOfIndex[current.image] === undefined) {
      arrOfIndex[current.image] = true;
      acc.push(formatObject(current));
    }
    return acc;
  }, []);
};

export default useFormatData;
