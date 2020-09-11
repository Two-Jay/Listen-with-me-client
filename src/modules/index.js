import { combineReducers } from 'redux';
import alongReducer from './along';
import userReducer from './user';
import modalReducer from './modal';
import mainReducer from './main';
import playListReducer from './playList';
import chatReducer from './chat';

export default combineReducers({
  user: userReducer,
  along: alongReducer,
  modal: modalReducer,
  main: mainReducer,
  playList: playListReducer,
  chat: chatReducer,
});
