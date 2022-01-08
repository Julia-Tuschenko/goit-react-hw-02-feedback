import React from 'react';
import FeedbackBtn from './FeedbackBtn';
import FeedbackStatistics from './FeedbackStatistics';

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
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badReview = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <FeedbackBtn
          onGood={this.goodReview}
          onNeutral={this.neutralReview}
          onBad={this.badReview}
        />

        <FeedbackStatistics
          onGoodState={good}
          onNeutralState={neutral}
          onBadState={bad}
          countTotal={this.countTotalFeedback()}
          countPositive={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
