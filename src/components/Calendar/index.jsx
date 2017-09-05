import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import Moment from 'moment'

class Calendar extends Component {
  state = {
    events: {},
    event: {"type":"VEVENT","params":[],"dtstamp":"20170831T060544Z","start":"2016-09-06T07:30:00.000Z","end":"2016-09-06T07:45:00.000Z","summary":"P. Louis Dit Picard - Exposé Retour d'entreprise","location":"004H","description":"\nIMR2 sortants\nCARADEC N\nTHION V.\nALAIN P.\n(Exporté le:31/08/2017 08:05)","uid":"ADE60456d706c6f6973647574656d7073323031362d323031372d343439392d302d30","created":"19700101T000000Z","last-modified":"20170831T060544Z","sequence":"1724329144"}
  }

  componentWillMount() {
    console.log(api);
    fetch(process.env.REACT_APP_BASE_API_URL + '/calendar/1472/byDay?projectId=4&firstDate=2017-09-01&lastDate=2017-12-30').then((response) => response.json()).then((responseJSON) => {
      this.setState({ events: responseJSON });
    })
  }

  generateTable = () => {
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
            lessonDisabled = Moment().isAfter(Moment(event.start));

        rows.push(
          <Table.Row key={ uid } disabled={ lessonDisabled }>
            <Table.Cell colSpan='1' textAlign='left'>{ startTime }</Table.Cell>
            <Table.Cell colSpan='1' textAlign='left'>{ diff }</Table.Cell>
            <Table.Cell colSpan='1' textAlign='left' style={{fontWeight: 'bold'}}>{ location }</Table.Cell>
            <Table.Cell colSpan='8' textAlign='left'>{ lessonTitle }</Table.Cell>
            <Table.Cell colSpan='5' textAlign='left'>Mr. CAIGNAERT</Table.Cell>
          </Table.Row>
        );
      }

      tables.push(
        <Table key={ day } celled attached fixed padded disabled={ dayDisabled }>
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
        {this.generateTable()}
      </div>
    )

    return calendar
  }
}

export default Calendar;