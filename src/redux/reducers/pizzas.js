const initialState = {
  items: [],
  isLoaded: false, //если загружено приложение то отобразим
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      //если действие является опредлеенной сортировкой
      return {
        ...state, //берет старые значения initialState (инфу по пиццам)
        items: action.payload, //заменяет items на новые значения. в акшен пейлоад будет массив
        isLoaded: true,
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};
//
export default pizzas;
//
