import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Title,
  Content,
  Text,
 } from 'native-base';
import ActivityList from './components/ActivityList';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Button transparent>
            <Icon name='ios-menu' />
          </Button>
          <Title>Reactivity Stream</Title>
        </Header>
        <Content>
          <ActivityList/>
        </Content>
      </Container>
    );
  }
}

Exponent.registerRootComponent(App);
