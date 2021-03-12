import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

function PizzaBlock({ name, imageUrl, price, types, sizes }) {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = React.useState(types[0]); // п. 3 - эктив тайп получает индекс массива и будет равно самому себе в онклике
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  const onSelectType = (index) => {
    setActiveType(index); //потом п.3
  };

  const onSelectSizes = (index) => {
    setActiveSize(index); //потом п.3
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              /* индекс - номер в массиве */
              key={type}
              onClick={() => onSelectType(index)} //потом работает п.2
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index), //проверка есть ли индекс
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              /* индекс - номер в массиве */
              key={size}
              onClick={() => setActiveSize(index)}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size), //проверка есть ли такой размер в бд, если нет то не активен
              })}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired, //имена пицц должны быть обязательно строками (проверка, необязательная т.к. там и так строки)
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired, //массив из только чисел
}; //будет показывать ошибку с лучае НЕ строки или числа или массива (в консоль)

PizzaBlock.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: [],
}; //по умолчанию ставлю такие свойства на всяк случай

export default PizzaBlock;
