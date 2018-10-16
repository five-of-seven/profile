import { GET_KARMA } from '../actions/index.js';

export default function (state=0, action) {
  switch(action.type) {
    case GET_KARMA:
      console.log('KARMA REDUCER:', action.payload.data.Item.points);
      return action.payload.data.Item.points;
    default: 
      return state;
  }
}