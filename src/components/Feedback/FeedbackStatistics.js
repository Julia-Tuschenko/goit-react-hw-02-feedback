import React from 'react';

const FeedbackStatistics = ({
  onGoodState,
  onNeutralState,
  onBadState,
  countTotal,
  countPositive,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good: {onGoodState} </p>
        </li>
        <li>
          <p>Neutral: {onNeutralState} </p>
        </li>
        <li>
          <p>Bad: {onBadState} </p>
        </li>
        <li>
          <p>Total: {countTotal}</p>
        </li>
        <li>
          <p>Positive feedback: {countPositive} % </p>
        </li>
      </ul>
    </div>
  );
};

export default FeedbackStatistics;
