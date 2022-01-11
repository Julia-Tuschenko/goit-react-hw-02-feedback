import React from 'react';
import { Section } from '../GeneralStyled/Section.styled';
import { Title, ListBtn, InfoList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <Section title="FeedbackOptions">
      <Title>Please leave feedback</Title>
      <ListBtn>
        <InfoList>
          <Button type="button" onClick={onGood}>
            Good
          </Button>
        </InfoList>
        <InfoList>
          <Button type="button" onClick={onNeutral}>
            Neutral
          </Button>
        </InfoList>
        <InfoList>
          <Button type="button" onClick={onBad}>
            Bad
          </Button>
        </InfoList>
      </ListBtn>
    </Section>
  );
};

export default FeedbackOptions;
