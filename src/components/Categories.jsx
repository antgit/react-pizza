import React from 'react'
 
/* class Categories extends React.Component {

    state = {
        activeItem: 3,
    }
    
    onSelectItem = index => {
        this.setState({
            activeItem: index,
        });  
        //сет згачит что обвить стейт 
    }

    render() {
        const { items, onClickItem } = this.props;
        return ( 
            <div className="categories">
                <ul>
                  <li>Все</li>
                  {items.map((name, index) => 
                  <li className={this.state.activeItem === index ? 'active ' : ''} 
                  // если (?) равен индексу то в класс добавить слово актив 
                  onClick={() => this.onSelectItem(index) }
                  //  передали индекс селектайтему что выше в коде находитс 
                  key ={`$name_${index}`}>{name}</li>)}
                </ul>
            </div>
        )
    }
} */


function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(null);
    //сет актив айтем функция для обновления переменнной, правило юсстейт
    //внизу присвоили индексу и юсттейт обновляет внешний вид, не используя юсстейт изменит индекс но визуально нет
    const onSelectItem = (index) => {
        setActiveItem(index);
    }


    console.log(activeItem, setActiveItem);
    //стейт будет хранить новое значение при клике на категории пицц
    return ( 
        <div className="categories">
            <ul>
              <li className={activeItem === null ? 'active ' : ''} onAuxClick={() => onSelectItem(null)}>
                  Все
                  </li>
              {items && 
              items.map((name, index) => 
              <li className={activeItem === index ? 'active ' : ''}
               onClick={() => onSelectItem(index) } key ={`$name_${index}`}>{name}</li>)}
            </ul>
        </div>
    )
}

export default Categories
