import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const POST_FRIENDS = 'POST_FRIENDS';
export const DELETE_FRIENDS = 'DELETE_FRIENDS';

const baseUrl = 'http://localhost:5000';

export const fetchFriends = () => dispatch => {
  return axios
    .get(`${baseUrl}/api/friends`)
    .then(res => {
      dispatch({
        type: FETCH_FRIENDS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const postFriends = friends => dispatch => {
  // dispatch({
  //   type: POSTFRIENDS_LOADING
  // })
  return axios
    .post(`${baseUrl}/api/friends`, friends)
    .then(res => {
      dispatch({
        type: POST_FRIENDS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteFriends = id => dispatch => {
  return axios
    .delete(`${baseUrl}/api/friends/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_FRIENDS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
