import React, { Component } from 'react';
import { Container, Table, Icon, Label } from 'semantic-ui-react'
const ical = require('ical')

class Calendar extends Component {
  state = {

  }

  render() {
    let calendar = (
      <div>
      <Table celled structured attached padded>
        <Table.Header>
          <Table.Row negative>
            <Table.HeaderCell colSpan='5'>Monday 21st of November</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing textAlign='left'>10.30</Table.Cell>
            <Table.Cell collapsing textAlign='left'>2 hours</Table.Cell>
            <Table.Cell collapsing textAlign='left' style={{fontWeight: 'bold'}}>005V</Table.Cell>
            <Table.Cell>Génie logiciel</Table.Cell>
            <Table.Cell>Mr. CAIGNAERT</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing textAlign='left'>10.30</Table.Cell>
            <Table.Cell collapsing textAlign='left'>2 hours</Table.Cell>
            <Table.Cell collapsing textAlign='left' style={{fontWeight: 'bold'}}>005V</Table.Cell>
            <Table.Cell>Génie logiciel</Table.Cell>
            <Table.Cell>Mr. CAIGNAERT</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing textAlign='left'>10.30</Table.Cell>
            <Table.Cell collapsing textAlign='left'>2 hours</Table.Cell>
            <Table.Cell collapsing textAlign='left' style={{fontWeight: 'bold'}}>005V</Table.Cell>
            <Table.Cell>Génie logiciel</Table.Cell>
            <Table.Cell>Mr. CAIGNAERT</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing textAlign='left'>10.30</Table.Cell>
            <Table.Cell collapsing textAlign='left'>2 hours</Table.Cell>
            <Table.Cell collapsing textAlign='left' style={{fontWeight: 'bold'}}>005V</Table.Cell>
            <Table.Cell>Génie logiciel</Table.Cell>
            <Table.Cell>Mr. CAIGNAERT</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing textAlign='left'>10.30</Table.Cell>
            <Table.Cell collapsing textAlign='left'>2 hours</Table.Cell>
            <Table.Cell collapsing textAlign='left' style={{fontWeight: 'bold'}}>005V</Table.Cell>
            <Table.Cell>Génie logiciel</Table.Cell>
            <Table.Cell>Mr. CAIGNAERT</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table celled structured attached padded>
        <Table.Header>
          <Table.Row negative>
            <Table.HeaderCell colSpan='5'>Monday 21st of November</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing textAlign='left'>10.30</Table.Cell>
            <Table.Cell collapsing textAlign='left'>2 hours</Table.Cell>
            <Table.Cell collapsing textAlign='left' style={{fontWeight: 'bold'}}>005V</Table.Cell>
            <Table.Cell>Génie logiciel</Table.Cell>
            <Table.Cell>Mr. CAIGNAERT</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing textAlign='left'>10.30</Table.Cell>
            <Table.Cell collapsing textAlign='left'>2 hours</Table.Cell>
            <Table.Cell collapsing textAlign='left' style={{fontWeight: 'bold'}}>005V</Table.Cell>
            <Table.Cell>Génie logiciel</Table.Cell>
            <Table.Cell>Mr. CAIGNAERT</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing textAlign='left'>10.30</Table.Cell>
            <Table.Cell collapsing textAlign='left'>2 hours</Table.Cell>
            <Table.Cell collapsing textAlign='left' style={{fontWeight: 'bold'}}>005V</Table.Cell>
            <Table.Cell>Génie logiciel</Table.Cell>
            <Table.Cell>Mr. CAIGNAERT</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing textAlign='left'>10.30</Table.Cell>
            <Table.Cell collapsing textAlign='left'>2 hours</Table.Cell>
            <Table.Cell collapsing textAlign='left' style={{fontWeight: 'bold'}}>005V</Table.Cell>
            <Table.Cell>Génie logiciel</Table.Cell>
            <Table.Cell>Mr. CAIGNAERT</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing textAlign='left'>10.30</Table.Cell>
            <Table.Cell collapsing textAlign='left'>2 hours</Table.Cell>
            <Table.Cell collapsing textAlign='left' style={{fontWeight: 'bold'}}>005V</Table.Cell>
            <Table.Cell>Génie logiciel</Table.Cell>
            <Table.Cell>Mr. CAIGNAERT</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </div>
    )

    return calendar;
  }
}

export default Calendar;