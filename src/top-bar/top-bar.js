import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../theme/theme';

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  max-width: 1300px;
  margin: 2% 5% 280px 5%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5%;
  }
`;

const LinkBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Oswald;
  //margin-left: auto;

  @media only screen and (max-width: 768px) {
    //margin-left: 0;
    //flex-direction: column;
    //align-self: center;
  }
`;

const PageLink = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  margin: 1% 0.1%;
  padding: 0.5rem 1rem;
  text-decoration: inherit;
  color: white;

  white-space: nowrap;

  &:hover {
    color: ${colors.white60};
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  cursor: pointer;
`;

const BigPageLink = styled.h1`
  color: white;
  font-family: Great Vibes;
  text-transform: none;
  font-size: 50px;
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

const StyledA = styled.a`
  font-size: 20px;
  text-transform: uppercase;
  margin: 1% 0.1%;
  padding: 0.5rem 1rem;
  text-decoration: inherit;
  color: ${colors.white};

  &:hover {
    color: ${colors.white60};
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Header = styled.h2`
  font-size: 35px;
  font-weight: 300;
  margin: 0;
`;

const ActionButton = styled.a`
  font-size: 20px;
  text-transform: uppercase;
  margin: 1% 0.1%;
  padding: 0.5rem 1rem;
  text-decoration: inherit;
  color: ${colors.white};

  &:hover {
    color: ${colors.white60};
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  background-color: ${colors.red};
  border-radius: 2px;
  box-sizing: border-box;
`;

export default class TopBar extends React.Component {
  render() {
    return (
      <Top id="top">
        <BigPageLink>Brian + Brooke</BigPageLink>
        <LinkBar>

          <PageLink onClick={() => { document.getElementById('registry').scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Registry</PageLink>
          |
          <PageLink onClick={() => { document.getElementById('maps').scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Maps</PageLink>
        </LinkBar>
      </Top>
    );
  }
}
