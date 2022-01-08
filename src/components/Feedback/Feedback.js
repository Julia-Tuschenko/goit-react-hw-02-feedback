import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodReview = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralReview = () => {
    console.log('Neutral');
  };

  badReview = () => {
    console.log('Bad');
  };

  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <ul>
            <button type="button" onClick={this.goodReview}>
              Good
            </button>
            <button type="button" onClick={this.neutralReview}>
              Neutral
            </button>
            <button type="button" onClick={this.badReview}>
              Bad
            </button>
          </ul>
        </div>

        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good:{this.state.good}</li>
            <li>Neutral:{this.state.neutral}</li>
            <li>Bad:{this.state.bad}</li>
            <li>Total:</li>
            <li>Positive feedback: %</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
