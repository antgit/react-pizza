import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  //сет актив айтем функция для обновления переменнной, правило юсстейт
  //внизу присвоили индексу и юсттейт обновляет внешний вид, не используя юсстейт изменит индекс но визуально нет
  //стейт будет хранить новое значение при клике на категории пицц

  /*    const onSelectItem = (index) => {
    onClickItem(index);
  };  */

  console.log(activeCategory);

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active ' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active ' : ''}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}); //по умолчанию ставлю такие свойства на всяк случай

//необязтельная часть (ниже)
Categories.propTypes = {
  //вместо такого можно тайпскриптом
  //activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
}; //будет показывать ошибку с лучае НЕ строки или числа или массива (в консоль)

Categories.defaultProps = { activeCategory: null, item: [] };
export default Categories;
