/* eslint-disable react/jsx-key */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getCandiesThunk } from '../reducers/index';

class AllCandy extends React.Component {
  constructor() {
    super();
    this.state = {
      candies: [],
    };
  }

  componentDidMount() {
    this.props.getCandiesThunk();
  }

  render() {
    const { candies } = this.props;
    console.log('props/candies are: ', candies);

    return (
      <div>
        <h1>Candies</h1>

        {candies.map(candy => {
          return (
            <div key={candy.id}>
              <img src={candy.imageUrl} />
              <div>
                <h1>{candy.name}</h1>
                <p>{candy.description}</p>
                <p>{candy.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = state => ({
  candies: state.candies,
});

const mapDispatch = dispatch => ({
  getCandiesThunk: () => dispatch(getCandiesThunk()),
});

export default connect(
  mapState,
  mapDispatch
)(AllCandy);
