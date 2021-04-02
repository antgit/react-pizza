import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; //объеденит Эпп с Редаксом

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { addPizzaToCart } from '../redux/actions/cart';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
//import { addPizzaToCart } from '../redux/action/cart';

const categoryNames = [' Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' }, //из базі данніх названия
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items); // можно как объект, можно так. вытащить из хранилища из параметра пиццаз  и фильтрс
  const cartItems = useSelector(({ cart }) => cart.items); //для добавления кол-ва к кнопке.
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded); //если поменять на айтемс заработает ис лоадед не работает
  const { category, sortBy } = useSelector(({ filters }) => filters);

  //должен определить загружена или нет(тру/фолс)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]); //рендер -- [] вызываем в зависимости от с какой переменной взаимодейтвовали в квадрат скобках

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type)); //kkkkkkkkkkkkk
    },
    [dispatch],
  );

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  }; //тут юз диспатч

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
        {/* {name: 'популярности', type: 'popular'} - в фигурные скобки заключили когда добавлять
        начали редакс (теперь это массив объектов), нейм, популяр - для сортировки при помощи него */}
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map((obj) => (
                <PizzaBlock
                  onClickAddPizza={handleAddPizzaToCart}
                  key={obj.id}
                  addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} //взять длину массива вида пицц
                  {...obj}
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <PizzaLoadingBlock key={index} />) //сделали так что бы показать все пицы из базі данных
          //{...obj} - тоже что obj = {obj} либо name = {obj.name} и прочие свойства таким образом. ...- вытащить все свойства
          //обдж - пицца блок
        }
      </div>
    </div>
  );
}

export default Home;
