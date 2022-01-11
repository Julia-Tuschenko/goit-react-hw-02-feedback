import React from 'react';
import { Section } from '../GeneralStyled/Section.styled';
import { NoFeedback } from './Notification.styled';

const Notification = () => {
  return (
    <Section>
      <NoFeedback>There is no feedback</NoFeedback>
    </Section>
  );
};

export default Notification;
