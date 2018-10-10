import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import icons from './icons/icons'

class MainList extends Component {
  state = {
    selectedIndex: 0,
    dash: {
      0: 'home',
      1: 'bonding',
      2: 'unbonding',
      3: 'injections',
      4: 'battery',
      5: 'temperature',
      6: 'errors'
    }
  }

  handleListItemClick = (e, index) => {
    this.setState({ selectedIndex: index})
    this.props.handleDashChange(this.state.dash[index])
  }

  render(){
    return (
      <div>
      <ListItem button
        selected={this.state.selectedIndex === 0}
        onClick={e => this.handleListItemClick(e, 0)}
      >
        <ListItemIcon>
          <Avatar id="home">
            {icons.home}
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
        <ListItem button
          selected={this.state.selectedIndex === 1}
          onClick={event => this.handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <Avatar id="bonding">
              {icons.bonding}
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Bonding" />
        </ListItem>
        <ListItem button
          selected={this.state.selectedIndex === 2}
          onClick={event => this.handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <Avatar id="unbonding">
              {icons.unbonding}
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Unbonding" />
        </ListItem>
        <ListItem button
          selected={this.state.selectedIndex === 3}
          onClick={event => this.handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <Avatar id="injections">
              {icons.injections}
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Injections" />
        </ListItem>
        <ListItem button
          selected={this.state.selectedIndex === 4}
          onClick={event => this.handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <Avatar id="battery">
              {icons.battery}
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Battery" />
        </ListItem>
        <ListItem button
          selected={this.state.selectedIndex === 5}
          onClick={event => this.handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <Avatar id="temperature">
              {icons.temperature}
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Temperature" />
        </ListItem>
        <ListItem button
          selected={this.state.selectedIndex === 6}
          onClick={event => this.handleListItemClick(event, 6)}
        >
          <ListItemIcon>
            <Avatar id="errors">
              {icons.errors}
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Errors" />
        </ListItem>
      </div>
    )
  }
}

export default MainList
