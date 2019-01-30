import axios from 'axios';
import { GET_FRIENDS, POST_FRIENDS } from './types';

const url = 'http://localhost:5000/api/friends';
export const getFriends = () => dispatch => {
  return axios.get(url).then(res => {
    console.log(res.data);
    dispatch({
      type: GET_FRIENDS,
      payload: res.data
    });
  });
};

export const postFriends = (name, age, email) => dispatch => {
  return axios.post(url, { name, age, email }).then(res =>
    dispatch({
      type: POST_FRIENDS,
      payload: res.data
    })
  );
};
