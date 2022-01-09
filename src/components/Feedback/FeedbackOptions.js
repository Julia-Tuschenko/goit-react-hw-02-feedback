import React from 'react';
import { Section } from '../Section.styled';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <Section title="FeedbackOptions">
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
    </Section>
  );
};

export default FeedbackOptions;
