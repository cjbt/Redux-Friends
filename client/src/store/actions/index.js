import axios from 'axios';
import {
  GET_FRIENDS,
  POST_FRIENDS,
  UPDATE_FRIENDS,
  POPULATE_FRIENDS,
  DELETE_FRIEND,
  GET_FRIENDs_START,
  HANDLE_CHANGE
} from './types';

const url = 'http://localhost:5000/api/friends';
export const getFriends = () => dispatch => {
  dispatch({
    type: GET_FRIENDs_START,
    payload: true
  });
  return axios
    .get(url)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_FRIENDS,
        payload: {
          data: res.data,
          isLoading: false
        }
      });
    })
    .catch(err => console.log(err));
};

export const postFriend = (name, age, email) => dispatch => {
  return axios
    .post(url, { name, age, email })
    .then(res =>
      dispatch({
        type: POST_FRIENDS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const deleteFriend = id => dispatch => {
  return axios
    .delete(`${url}/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_FRIEND,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const populateFriends = id => {
  return {
    type: POPULATE_FRIENDS,
    payload: id
  };
};

export const updateFriend = (id, name, age, email) => dispatch => {
  axios
    .put(`${url}/${id}`, { name, age, email })
    .then(res =>
      dispatch({
        type: UPDATE_FRIENDS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const handleChange = (name, value) => ({
  type: HANDLE_CHANGE,
  payload: {
    name,
    value
  }
});

//9Saesh0NF16dgggCVHZgNTZMumY37Ldj2vZ9ulE4
