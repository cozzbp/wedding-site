import React from 'react';
import styled from 'styled-components';

import VolunteerForm from '../forms/volunteer-form';

const HomeWrapper = styled.div`
  font-family: "Roboto";
  text-align: center;
  max-width: 900px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  font-size: 42px;
  line-height: 50px;
`;

const AboutP = styled.p`
  margin: 0 10%;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  text-align: center;
  box-sizing: border-box;
  max-width: 100%;
`;

export default class VolunteerPage extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <Header>Join The Team</Header>
        <VolunteerForm/>
      </HomeWrapper>
    );
  }
}
