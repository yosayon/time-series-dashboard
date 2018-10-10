import React from 'react'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import MainList from './MainList'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider';

const NavBar = ({ classes, isOpen, handleMenuOpen, handleMenuClose, handleDashChange, selection }) => {
  const myClasses = classes
    return (
      <div className={myClasses.root}>
        <AppBar
            position="absolute"
            className={classNames(myClasses.appBar, isOpen && myClasses.appBarShift)}
          >

          <Toolbar disableGutters={!isOpen} className={myClasses.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleMenuOpen}
                className={classNames(myClasses.menuButton,isOpen && myClasses.menuButtonHidden,)}
                >
                <MenuIcon />
              </IconButton>

              <Typography
                component="h1"
                variant="title"
                color="inherit"
                noWrap
                className={myClasses.title}
              >
                Time Series Dashboard
              </Typography>
              <IconButton color="inherit"/>
          </Toolbar>
        </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(myClasses.drawerPaper, !isOpen && myClasses.drawerPaperClose),
            }}
            open={isOpen}
          >
            <div className={myClasses.toolbarIcon}>
              <IconButton onClick={handleMenuClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
              <MainList
                handleDashChange={handleDashChange}
                selection={selection}
              />
            <Divider />
          </Drawer>
        </div>
      )
}

export default NavBar
