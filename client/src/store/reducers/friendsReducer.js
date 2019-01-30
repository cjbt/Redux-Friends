import {
  GET_FRIENDS,
  POST_FRIENDS,
  UPDATE_FRIENDS,
  POPULATE_FRIENDS,
  DELETE_FRIEND
} from '../actions/types';

const initialState = {
  friends: [],
  name: '',
  age: '',
  email: '',
  beingUpdated: null,
  isUpdating: false
};

const friends = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      console.log(action);
      return {
        ...state,
        friends: action.payload
      };
    case POST_FRIENDS:
      return {
        ...state,
        friends: action.payload
      };
    case DELETE_FRIEND:
      return {
        ...state,
        friends: action.payload
      };
    case POPULATE_FRIENDS:
      let selected = state.friends.find(friend => friend.id === action.payload);
      return {
        ...state,
        name: selected.name,
        age: selected.age,
        email: selected.email,
        beingUpdated: selected.id,
        isUpdating: true
      };
    case UPDATE_FRIENDS:
      return {
        ...state,
        friends: action.payload,
        name: '',
        age: '',
        email: '',
        beingUpdated: null,
        isUpdating: false
      };

    default:
      return state;
  }
};

export default friends;
