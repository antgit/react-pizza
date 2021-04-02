const initialState = {
  category: null, //порядковый номер условно. нал - индекс для "все" т.к. следующий идет с нуля
  sortBy: {
    type: 'popular',
    order: 'desc',
  }, //сортировать будем по популярности
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    //если действие является опредлеенной сортировкой
    return {
      ...state, //берет старые значения стейта
      sortBy: action.payload, //заменяет свофство сортБай на новые значения
    };
  }
  if (action.type === 'SET_CATEGORY') {
    //у меня не было этого кускка кода, разобрать его (!!!!)
    return {
      ...state,
      category: action.payload,
    };
  }
  return state; //если дейатсвие не вызвано то возвращаем  стейт что и были раньше
};
//стейт - актуальное значение, єкшн - действие, напр. добавить пиццу
export default filters;
//тут хранится логика меняющая фильтрацию
