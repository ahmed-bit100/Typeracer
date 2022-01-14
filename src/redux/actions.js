import axios from 'axios';
import {FETCH_DATA, SLICE} from './actionTypes';

export const fetchData = () => async (dispatch) => {
  try {
    const res = await axios.get('http://metaphorpsum.com/paragraphs/1/6');
    console.log(res);
    dispatch({
      type: FETCH_DATA,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const sliceText = (newText) => {
  return {
    type: SLICE,
    paylaod: newText,
  };
};
