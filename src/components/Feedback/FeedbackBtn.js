import React from 'react';

const FeedbackBtn = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <ul>
        <button type="button" onClick={onGood}>
          Good
        </button>
        <button type="button" onClick={onNeutral}>
          Neutral
        </button>
        <button type="button" onClick={onBad}>
          Bad
        </button>
      </ul>
    </div>
  );
};

export default FeedbackBtn;
