import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import './style.css'
import logo from './logo.svg';

class NavigationBar extends Component {
  state = {  }
  render() {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' href='/' header>
            <Image
              size='mini'
              src={logo}
              style={{ marginRight: '1.5em' }}
            />
            Enss'app
          </Menu.Item>
          <Menu.Item as='a' href="/agenda">Agenda</Menu.Item>
          <Menu.Item as='a' href="/grades">Grades</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavigationBar;