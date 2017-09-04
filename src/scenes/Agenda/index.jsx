import React, { Component } from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';
import Calendar from '../../components/Calendar'

class Agenda extends Component {
  state = {  }
  render() {
    return (
      <Container style={{ marginTop: '7em', paddingBottom: '3em' }}>
        <Header as='h1'>
          <Icon name='calendar' />
          <Header.Content>
            Agenda
          </Header.Content>
        </Header>
        <Calendar />
      </Container>
    );
  }
}

export default Agenda;  