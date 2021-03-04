import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import TopBar from './top-bar/top-bar';
import LandingPage from './landing-page/landing-page';

import { colors } from './theme/theme';

import './Main.scss';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  align-items: center;
  position: relative;
  height: auto;
  color: ${colors.white};
`;

const ContentWrapper = styled.div`
  margin-bottom: 100px;
  //background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.2) 20%,rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.2) 80%,rgba(0,0,0,0) 100%);
`;


class LocationListener extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.handleLocationChange(this.context.router.history.location);
    this.unlisten = this.context.router.history.listen(this.handleLocationChange);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleLocationChange(location) {
    // your staff here
    if (location.pathname !== '/') {
      document.getElementById('content').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render() {
    return this.props.children;
  }
}

export default class Root extends React.Component {
  handlePageChange = () => {
    window.scrollTo(0, 50);
  };

  render() {
    return (
      <div className="App">
        <HashRouter hashType={'hashbang'}>
          <LocationListener>
            <RootWrapper id="root_wrapper">
              <TopBar/>
              <ContentWrapper id="content">
                <Switch>
                  <Route exact path="/" component={LandingPage}/>
                  <Route path="/about" component={LandingPage}/>
                </Switch>
              </ContentWrapper>
            </RootWrapper>
          </LocationListener>
        </HashRouter>
      </div>
    );
  }
}
