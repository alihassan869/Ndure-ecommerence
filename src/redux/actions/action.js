export const ADD = (item) => {
  return {
    type: 'ADD_CART',
    payload: item,
  };
};
// DELETE CARTS
export const DLT = (id) => {
  return {
    type: 'DLT_ITEM',
    payload: id,
  };
};
// DELETE CARTS ONE
export const DLTONE = (item) => {
  return {
    type: 'DLT_ONE',
    payload: item,
  };
};
// Search
export const Search = (item) => {
  // console.log(item);
  return {
    type: 'Search_item',
    payload: item,
  };
};
