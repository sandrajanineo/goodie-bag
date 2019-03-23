import React from 'react';
import { connect } from 'react-redux';
import { getCandiesThunk } from '../reducers/index';

const Root = () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
    </div>
  );
};

// const mapState = state => ({
//   candies: state.candies,
// });

const mapDispatch = dispatch => ({
  getCandiesThunk: () => dispatch(getCandiesThunk()),
});

connect(
  null,
  mapDispatch
)(Root);

export default Root;
