import React, { Component } from 'react'
import { Button, Icon, Menu, Segment, Sidebar, MenuHeader } from 'semantic-ui-react'
import GridContaier from './GridLogin'
import GridUserProfile from './GridUserProfile'
import UserContainer from './UserContainer';
import HeaderUserProfile from './HeaderUserProfile';

export default class SidebarHomePage extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

render() {
    const { visible } = this.state

    return (
      <div>

        <Button.Group style={{marginLeft: '5px', marginTop: 'auto'}} >
          <Button  icon="list" circular width='very thin' color="black" disabled={visible} onClick={this.handleShowClick}>
         
          </Button>
          
        </Button.Group>

        <Sidebar.Pushable >
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
            
            
            
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='edit' />
              Profile
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='calendar alternate' />
              Booking
            </Menu.Item>
          </Sidebar>
           
          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <HeaderUserProfile/>
             <UserContainer/>
              
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}