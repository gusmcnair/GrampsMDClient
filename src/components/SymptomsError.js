import React from 'react';

export default class SymptomsError extends React.Component {

  render() {
    if (this.props.error === true) {
      return (
        <article className='errorbox animated fadeIn'>
          <h3>Sorry, grandpa must be asleep</h3>
          <p>Try refreshing or checking your internet connection, maybe that will wake him up.</p>
        </article>
      );
    }
    return this.props.children;
  }
}