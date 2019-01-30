import { GET_FRIENDS, POST_FRIENDS } from '../actions/types';

const initialState = {
  friends: []
};

const friends = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      console.log(action);
      return {
        friends: action.payload
      };
    case POST_FRIENDS:
      return {
        friends: action.payload
      };

    default:
      return state;
  }
};

export default friends;
