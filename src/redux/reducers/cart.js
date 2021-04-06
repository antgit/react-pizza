const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.size + action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.size + action.payload.id].items, action.payload];
      console.log(action.payload.size);

      let k, m;

      action.payload.size === 26 ? (k = 1) : (k = 1.4);
      action.payload.size === 40 ? (m = 1.2) : (m = 1);

      const newItems = {
        ...state.items,
        [action.payload.size + action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: k * m * getTotalPrice(currentPizzaItems),
        },
      };

      console.log([action.payload.size]);

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0,
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload.size + action.payload.id].items,
        state.items[action.payload.size + action.payload.id].items[0],
      ];

      let k, m;

      action.payload.size === 26 ? (k = 1) : (k = 1.4);
      action.payload.size === 40 ? (m = 1.2) : (m = 1);

      const newItems = {
        ...state.items,
        [action.payload.size + action.payload.id]: {
          items: newObjItems,
          totalPrice: k * m * getTotalPrice(newObjItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0,
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload.size + action.payload.id].items;

      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload.size + action.payload.id].items.slice(1)
          : oldItems;

      let k, m;

      action.payload.size === 26 ? (k = 1) : (k = 1.4);
      action.payload.size === 40 ? (m = 1.2) : (m = 1);

      const newItems = {
        ...state.items,
        [action.payload.size + action.payload.id]: {
          items: newObjItems,
          totalPrice: k * m * getTotalPrice(newObjItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0,
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'CLEAR_CART':
      return {
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };

    default:
      return state;
  }
};

export default cart;
