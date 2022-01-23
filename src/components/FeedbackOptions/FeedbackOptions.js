import React from 'react';
import { Section } from '../GeneralStyled/Section.styled';
import { Title, ListBtn, InfoList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onReview }) => {
  return (
    <Section title="FeedbackOptions">
      <Title>Please leave feedback</Title>
      <ListBtn>
        <InfoList>
          {options.map(btn => (
            <Button value={btn} key={btn} type="button" onClick={onReview}>
              {btn}
            </Button>
          ))}
        </InfoList>
        {/* <InfoList>
          <Button type="button" onClick={onNeutral}>
            Neutral
          </Button>
        </InfoList>
        <InfoList>
          <Button type="button" onClick={onBad}>
            Bad
          </Button>
        </InfoList> */}
      </ListBtn>
    </Section>
  );
};

export default FeedbackOptions;
