export const setSortBy = ({ type, order }) => ({
  //нейм до этого другое, разобрать (!!!)
  type: 'SET_SORT_BY',
  payload: { type, order },
}); //name - тип переменной с которой работаем

export const setCategory = (catIndex) => ({
  //чтобы менять категорию
  type: 'SET_CATEGORY',
  payload: catIndex,
});
//тут хранятся действия связанные с фильтрацией
