const INTIAL_STATE = {
  CARTS: [],
  search: '',
};
export const cartreducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const indexitem = state.CARTS.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (indexitem >= 0) {
        state.CARTS[indexitem].qnty += 1;
        return {
          ...state,
          CARTS: [...state.CARTS],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          CARTS: [...state.CARTS, temp],
        };
      }
    case 'DLT_ITEM':
      const Newcarts = state.CARTS.filter((item) => item.id !== action.payload);
      return {
        ...state,
        CARTS: Newcarts,
      };
    case 'DLT_ONE':
      const find_index = state.CARTS.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (state.CARTS[find_index].qnty > 1) {
        state.CARTS[find_index].qnty -= 1;
        return {
          ...state,
          CARTS: [...state.CARTS],
        };
      } else if (state.CARTS[find_index].qnty === 1) {
        const data = state.CARTS.filter((el) => el.id !== action.payload.id);
        return {
          ...state,
          CARTS: data,
        };
      }
    case 'Search_item':
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
