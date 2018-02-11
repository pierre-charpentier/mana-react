import React, { Component } from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'
import './style.css'
import logo from './logo.svg'

class NavigationBar extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' href='/' header>
            <Image
              size='mini'
              src={logo}
              style={{ marginRight: '1.5em' }}
            />
            Mana
          </Menu.Item>
          <Menu.Item as='a' href='/agenda'>Agenda</Menu.Item>
          <Menu.Item as='a' href='/grades' disabled>Grades</Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default NavigationBar
