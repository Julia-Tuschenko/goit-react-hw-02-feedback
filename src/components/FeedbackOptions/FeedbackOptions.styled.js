import styled from '@emotion/styled';

export const Title = styled.h1`
  width: 450px;
  margin: 0;

  font-family: Caviar Dreams;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  text-align: center;

  color: #2b2b2b;
`;

export const ListBtn = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InfoList = styled.li`
  margin-right: 15px;
  margin-top: 30px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  width: 277px;
  height: 56px;
  left: 517px;
  top: 1738px;

  cursor: pointer;
  background: #f5f5fa;
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(72, 121, 150, 0.1),
    5px 5px 10px rgba(72, 121, 150, 0.25), -5px -5px 10px #ffffff;
  border-radius: 30.5px;
  border: transparent;
  &:hover {
    background: red;
  }
`;
