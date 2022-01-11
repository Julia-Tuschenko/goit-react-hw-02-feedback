import React from 'react';
import { Section } from '../GeneralStyled/Section.styled';
import {
  Title,
  StatisticsInforms,
  InfoList,
  Text,
  Number,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Section title="Statistics">
      <Title>Statistics</Title>
      <StatisticsInforms>
        <InfoList>
          <Text>
            Good: <Number>{good} </Number>
          </Text>
        </InfoList>
        <InfoList>
          <Text>
            Neutral: <Number>{neutral} </Number>
          </Text>
        </InfoList>
        <InfoList>
          <Text>
            Bad: <Number>{bad} </Number>
          </Text>
        </InfoList>
        <InfoList>
          <Text>
            Total: <Number>{total}</Number>
          </Text>
        </InfoList>
        <InfoList>
          <Text>
            Positive feedback: <Number>{positivePercentage} % </Number>
          </Text>
        </InfoList>
      </StatisticsInforms>
    </Section>
  );
};

export default Statistics;
