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
      const { allCandiesData } = await axios.get('/api/candies');
      dispatch(getCandies(allCandiesData));
    } catch (err) {
      console.log('ERR while fetching candies', err);
    }
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return { candies: action.candies };

    default:
      return state;
  }
};

export default rootReducer;
