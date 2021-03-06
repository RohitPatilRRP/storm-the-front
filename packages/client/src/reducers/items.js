import { ADD_ITEM } from '../actions/items';

const initialStore = {
  items: [
    { id: 1 },
  ],
};

export default function itemsReducer(store = initialStore, action) {
  switch (action.type) {
    case ADD_ITEM: return { ...store, items: [...store.items, action.payload.item] };
    default: return store;
  }
}
