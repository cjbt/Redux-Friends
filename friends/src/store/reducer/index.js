// STEP 3
import { FETCH_FRIENDS, POST_FRIENDS, DELETE_FRIENDS } from '../actions';
const initialState = {
  friends: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return {
        friends: action.payload
      };
    case POST_FRIENDS:
      return {
        friends: action.payload
      };
    case DELETE_FRIENDS:
      return {
        friends: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
