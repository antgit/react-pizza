import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom'; //реакт роутер не перезагружает при переходе по ссілке

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />{' '}
        {/* рендер потому что в компонент хом хотим что-то размещать (пропс айтемпс), если нет подобной цели конструкция по приммеру component={Cart} */}
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
