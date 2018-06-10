import { createStore, combineReducers } from 'redux';
import home from './reducers/home';

export const store = createStore(
    combineReducers({home})
  );