import axios from 'axios';
import { GET_FRIENDS } from './types';

const url = 'http://localhost:5000/friends';
export const getFriends = () => dispatch => {
  return axios.get(url).then(res => {
    console.log(res.data);
    dispatch({
      type: GET_FRIENDS,
      payload: res.data
    });
  });
};
