import firebase from 'firebase';
import {
  FETCH_ITEMS
} from './types';

export const fetchItems = () => {
  return (dispatch) => {
    firebase.database().ref('/items')
      .on('value', snapshot => {
        dispatch({ type: FETCH_ITEMS, payload: snapshot.val() });
      });
  };
};
