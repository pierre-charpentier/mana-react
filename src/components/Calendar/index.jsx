import React, { Component } from 'react';
import { Table, Loader, Dimmer } from 'semantic-ui-react';
import Moment from 'moment';

class Calendar extends Component {
  state = {
    events: {},
    isLoading: true,
  };

  componentWillMount() {
    fetch(process.env.REACT_APP_BASE_API_URL + '/calendar/1472/byDay?projectId=4&firstDate=2017-09-01&lastDate=2017-12-30').then((response) => response.json()).then((responseJSON) => {
      this.setState({ events: responseJSON, isLoading: false });
    });
  };

  generateCalendar = () => {
    let tables = [];

    let keys = Object.keys(this.state.events);
    keys.sort();

    for(let idx1 in keys) {
      let rows = [];
      let day = keys[idx1];
      let dayDisabled = Moment().isAfter(Moment(day));
      let currentDayEvents = this.state.events[day];

      for (let idx2 in currentDayEvents) {
        let event = currentDayEvents[idx2];

        let diff = Moment.utc(Moment(event.end).diff(Moment(event.start))).format('HH[h]mm'),
            uid = event.uid,
            startTime = Moment(event.start).format("HH:mm"),
            location = event.location.split('-')[0],
            lessonTitle = event.summary,
            teachers = event.teachers,
            lessonDisabled = Moment().isAfter(Moment(event.start));

        rows.push(
          <Table.Row key={ uid } disabled={ lessonDisabled }>
            <Table.Cell colSpan='1' textAlign='left'>{ startTime }</Table.Cell>
            <Table.Cell colSpan='1' textAlign='left'>{ diff }</Table.Cell>
            <Table.Cell colSpan='1' textAlign='left' style={{fontWeight: 'bold'}}>{ location }</Table.Cell>
            <Table.Cell colSpan='8' textAlign='left'>{ lessonTitle }</Table.Cell>
            <Table.Cell colSpan='5' textAlign='left'>{ teachers.join(', ') }</Table.Cell>
          </Table.Row>
        );
      }

      tables.push(
        <Table key={ day } attached fixed padded disabled={ dayDisabled }>
          <Table.Header>
            <Table.Row negative>
              <Table.HeaderCell colSpan='16'>{ Moment(day).format('dddd, DD MMMM YYYY') }</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {
              rows
            }
          </Table.Body>
        </Table>
      )
    }

    return tables;
  }

  render() {
    let calendar = (
      <div>
      <Dimmer active={ this.state.isLoading }>
          <Loader active={ this.state.isLoading } size='huge'>Loading calendar...</Loader>
      </Dimmer>
      { this.generateCalendar() }
      </div>
    )

    return calendar
  }
}

export default Calendar;