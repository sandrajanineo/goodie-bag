import React from 'react';
import { connect } from 'react-redux';
import { getCandiesThunk } from '../reducers/index';
import AllCandy from './AllCandy';
import { HashRouter, Route, Link } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <HashRouter>
          <Route path="/candies" component={AllCandy} />
        </HashRouter>
      </main>
    </div>
  );
};

export default Root;
