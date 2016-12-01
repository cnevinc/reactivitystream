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
  Card,
  CardItem,
 } from 'native-base';

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
          <Card>
            <CardItem>
              <Icon name="logo-googleplus" style={{ color: '#DD5044' }} />
              <Text>10:07 Google+</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-facebook" style={{ color: 'blue' }} />
              <Text>10:17 Facebook</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

Exponent.registerRootComponent(App);
