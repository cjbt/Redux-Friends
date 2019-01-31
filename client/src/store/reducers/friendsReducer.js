import {
  GET_FRIENDS,
  POST_FRIENDS,
  UPDATE_FRIENDS,
  POPULATE_FRIENDS,
  DELETE_FRIEND,
  GET_FRIENDs_START,
  HANDLE_CHANGE
} from '../actions/types';

const initialState = {
  friends: [],
  name: '',
  age: '',
  email: '',
  beingUpdated: null,
  isUpdating: false,
  isLoading: false
};

const friends = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDs_START:
      return {
        ...state,
        isLoading: action.payload
      };
    case GET_FRIENDS:
      console.log(action);
      return {
        ...state,
        friends: action.payload.data,
        isLoading: action.payload.isLoading
      };
    case POST_FRIENDS:
      return {
        ...state,
        friends: action.payload,
        name: '',
        age: '',
        email: ''
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
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    default:
      return state;
  }
};

export default friends;
