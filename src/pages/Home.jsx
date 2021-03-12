import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={[' Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}></Categories>
        <SortPopup items={['популярности', 'цене', 'алфавиту']}></SortPopup>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} /> //сделали так что бы показать все пицы из базі данных
          //{...obj} - тоже что obj = {obj} либо name = {obj.name} и прочие свойства таким образом. ...- вытащить все свойства
          //обдж - пицца блок
        ))}
      </div>
    </div>
  );
}

export default Home;
