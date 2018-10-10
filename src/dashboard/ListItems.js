import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import icons from './icons/icons'

export const mainListItems = (
  <div>
  <ListItem button
  >
    <ListItemIcon>
      <Avatar id="home">
        {icons.home}
      </Avatar>
    </ListItemIcon>
    <ListItemText primary="Home" />
  </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Avatar id="bonding">
          {icons.bonding}
        </Avatar>
      </ListItemIcon>
      <ListItemText primary="Bonding" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Avatar id="unbonding">
          {icons.unbonding}
        </Avatar>
      </ListItemIcon>
      <ListItemText primary="Unbonding" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Avatar id="injections">
          {icons.injections}
        </Avatar>
      </ListItemIcon>
      <ListItemText primary="Injections" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Avatar id="battery">
          {icons.battery}
        </Avatar>
      </ListItemIcon>
      <ListItemText primary="Battery" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Avatar id="temperature">
          {icons.temperature}
        </Avatar>
      </ListItemIcon>
      <ListItemText primary="Temperature" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Avatar id="errors">
          {icons.errors}
        </Avatar>
      </ListItemIcon>
      <ListItemText primary="Errors" />
    </ListItem>
  </div>
);
