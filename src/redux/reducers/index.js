import { combineReducers } from 'redux'; //комбайном объеденяем редюсеры

//редюсеры. в просмотреть код недалеко от консоли во вкладке редакс они отображаются
import filters from './filters'; //без комбайна нельзя два
import pizzas from './pizzas';
import cart from './cart';

const rootReducer = combineReducers({
  filters, //filters: filters - аналогичная запись этой строки
  pizzas,
  cart,
});

export default rootReducer;
