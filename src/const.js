export const API_URL = 'https://evening-proximal-lizard.glitch.me';
export const GOODS_URL = `${API_URL}/api/goods`;
export const CATEGOY_URL = `${API_URL}/api/categories`;
export const COLORS_URL = `${API_URL}/api/colors`;

export const DATA = {};

export const getData = async (urlApi, param, cbError = () => {}) => {
  try {
    const url = new URL(urlApi);

    if (param && typeof param === "object") {
      for (const key in param) {
        url.searchParams.set(key, param[key]);
      }
    }

    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;

  } catch (err) {
    console.warn(err);
    if (typeof param === "function") {
      param(err);
    } else {
      cbError(err);
    }
  }
};

/** -------------------------------------------------------------------------------
Сервер Inspired запущен. Вы можете использовать его по адресу http://localhost:8024
Нажмите CTRL+C, чтобы остановить сервер
Доступные методы:
GET /api/goods - получить список всех товаров с пагинацией
GET /api/goods/{id} - получить товар по его ID
GET /api/categories - получить список категорий
GET /api/colors - получить список цветов
GET /api/goods?[param]
Параметры:
        gender
        category&gender
        search = поиск
        count = количество товаров (12)
        page = страница (1)
        list={id},{id} - получить список товаров по id
        exclude=id - исключить id
        top=true - топ товары

POST /api/order - оформить заказ (
          {
            fio: str,
            address: str,
            phone: str,
            email: str,
            delivery: bool,
            goods: [{id, count}]
          })
          no validate
--------------------------------------------------------------------*/