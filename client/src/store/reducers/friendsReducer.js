import { GET_FRIENDS } from '../actions/types';

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

    default:
      return state;
  }
};

export default friends;
