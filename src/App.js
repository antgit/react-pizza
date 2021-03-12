import { Header } from './components';
import { Home, Cart } from './pages';
import React from 'react';
import axios from 'axios'; //fetch - вместо него
import { Route } from 'react-router-dom'; //реакт роутер не перезагружает при переходе по ссілке

function App() {

  const [pizzas, setPizzas] = React.useState([]);

React.useEffect(() => {
  axios.get('http://localhost:3000/db.json').then(({ data }) => {
    setPizzas(data.pizzas);
  });
 }, []); 
 //код: когда запрос отправлен в бд, конвертируем джейсон, then(json => джейсон получил...(?). 
//setPizzas(json.pizzas) - из джейсона вытащить пиццаз. данные по пиццаз сохранили в переменную пиццаз из конст реакт.юсстейт
//пиццаз - все пиццы базы данных в итоге (о fetch, axios аналог )


  return (
    <div className="wrapper">
      <Header />
    <div className="content">
    <Route path="/" render={() => <Home items ={pizzas}/>} exact/> {/* рендер потому что в компонент хом хотим что-то размещать (пропс айтемпс), если нет подобной цели конструкция по приммеру component={Cart} */}
    <Route path="/cart" component={Cart} exact/>
    </div>
  </div>
  );
}

export default App;
