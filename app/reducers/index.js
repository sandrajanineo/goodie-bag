import axios from 'axios';

const initialState = {
  candies: [],
};

//action type
const GET_CANDIES = 'GET_CANDIES';

//action creator
export const getCandies = candies => ({
  type: GET_CANDIES,
  candies,
});

//thunk
export const getCandiesThunk = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/candies');
      console.log('data is, ', data);
      dispatch(getCandies(data));
    } catch (err) {
      console.log('ERR while fetching candies', err);
    }
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return { ...state, candies: action.candies };

    default:
      return state;
  }
};

export default rootReducer;
