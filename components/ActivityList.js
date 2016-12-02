import React, { Component } from 'react';

import {
  Text,
  Icon,
  Card,
  CardItem,
} from 'native-base';

class TaskList extends Component {
  render() {
    return (
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
    );
  }
}

export default TaskList;