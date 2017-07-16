// import axios from 'axios';
import firebase from 'firebase';
import {
  FETCH_ITEMS
} from './types';

export const fetchItems = () => {
  return (dispatch) => {
    firebase.database().ref('/itemsTest')
      .on('value', snapshot => {
        dispatch({ type: FETCH_ITEMS, payload: snapshot.val() });
      });
  };
};
