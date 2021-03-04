import React from 'react';
import styled from 'styled-components';

import Countdown from '../countdown/countdown';
import TargetLogo from '../logos/target';
import AmazonLogo from '../logos/amazon';
import { colors } from '../theme/theme';

const HomeWrapper = styled.div`
  font-family: "Roboto";
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  font-family: Great Vibes;
  color: ${colors.white};
  font-size: 45px;
  margin-top: 200px;
  font-weight: 100;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 9vw;
  }
`;

const SubHeader = styled.div`
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

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderBold = styled.h2`
  font-size: 60px;
  letter-spacing: 0.1em;
  font-weight: 700;
  margin: 200px 0 0 0 ;
  text-align: center;
  max-width: 100%;
  color: white;

  @media only screen and (max-width: 768px) {
    font-size: 6vw;
  }
`;

const DateWrapper = styled.div`
  font-size: 40px;
  font-family: Great Vibes;
  color: ${colors.purple};
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 7vw;
  }
`;

const StyledCountdown = styled(Countdown)`
`;

const Centered = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledIframe = styled.iframe`
  margin: 10px;
  padding: 10px;
  border: 0;
  pointer-events: none;
  max-width: 90%;
`;

const RowFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const RowFlex2 = styled(RowFlex)`
  align-items: flex-end;
`;

const InfoWrapper = styled.div`
  text-align: center;
  font-family: EB Garamond;
  letter-spacing: 0.1em;
  color: ${colors.white};
`;

const InforWrapperPurple = styled(InfoWrapper)`
  color: ${colors.purple};
`;

const InfoWrapperBold = styled(InfoWrapper)`
  font-weight: 600;
  font-size: 18px;
`;

const LogoA = styled.a`
  margin: 20px 0;
`;

const LogoA2 = styled.a`
  margin-top: 16px;
`;

const MapA = styled.a`
  display: flex;
`;

export default class LandingPage extends React.Component {

  render() {
    return (
      <HomeWrapper>
        <HeaderBold>WE'RE GETTING MARRIED!</HeaderBold>
        <DateWrapper>
          <SubHeader>
            June 28, 2018
          </SubHeader>
          <Centered>|</Centered>
          <StyledCountdown date={'2018-06-28T17:00:00.000Z'}/>
        </DateWrapper>
        <Header id="registry">
         We are registered at
        </Header>
        <RowFlex>
          <LogoA href="http://tgt.gifts/df21c7b5097145b989016b51eb378f85" target="_blank"><TargetLogo/></LogoA>
          <LogoA2 href="https://www.amazon.com/wedding/brooke-roark-brian-cozzens-salt-lake-city-june-2018/registry/263WHDTP8503M" target="_blank"><AmazonLogo/></LogoA2>
        </RowFlex>
        <Header id="maps">
          Receptions will be held at
        </Header>
        <RowFlex2>
          <div>
            <InfoWrapperBold>Draper Historical Park</InfoWrapperBold>

            <InfoWrapper>Thursday, June 28, 2018 7:00PM - 9:00PM</InfoWrapper>
            <a href="/draper-reception-program.jpg" target="_blank"><InforWrapperPurple>(View Schedule)</InforWrapperPurple></a>
            <MapA href="https://goo.gl/maps/4ETz6jXrSzt" target="_blank"><StyledIframe width="350" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=Draper Historical Park&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></StyledIframe></MapA>
          </div>
          <div>
            <InfoWrapperBold>Cozzens Home</InfoWrapperBold>
            <InfoWrapper>Saturday, June 30, 2018 7:00PM - 9:00PM</InfoWrapper>
            <MapA href="https://goo.gl/maps/7T4tiVU89rN2" target="_blank"><StyledIframe width="350" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=153 Peaceful Ct, Cedar City, UT 84720+(Cozzens Home)&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></StyledIframe></MapA>
          </div>
        </RowFlex2>
    </HomeWrapper>
    );
  }
}
