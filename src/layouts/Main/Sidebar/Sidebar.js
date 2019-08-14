import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
// import '../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
const user_lock = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-lock" class="svg-inline--fa fa-user-lock fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"></path></svg>

const gear_icon = (<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cogs" class="svg-inline--fa fa-cogs fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
  <path fill="currentColor" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"></path>
</svg>)

const diff_icon = (<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="columns" class="svg-inline--fa fa-columns fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"></path></svg>)
const shredder_icon = (<svg id="Layer_1" enable-background="new 0 0 56 58" height="512" viewBox="0 0 56 58" width="512" xmlns="http://www.w3.org/2000/svg">
<path d="m29.03 39c-.552 0-1 .448-1 1v17c0 .552.448 1 1 1s1-.448 1-1v-17c0-.552-.448-1-1-1z"/>
<path d="m25.03 39c-.552 0-1 .448-1 1v17c0 .552.448 1 1 1s1-.448 1-1v-17c0-.552-.448-1-1-1z"/>
<path d="m21.03 39c-.552 0-1 .448-1 1v17c0 .552.448 1 1 1s1-.448 1-1v-17c0-.552-.448-1-1-1z"/>
<path d="m17.03 39c-.552 0-1 .448-1 1v17c0 .552.448 1 1 1s1-.448 1-1v-17c0-.552-.448-1-1-1z"/>
<path d="m13.03 39c-.552 0-1 .448-1 1v17c0 .552.448 1 1 1s1-.448 1-1v-17c0-.552-.448-1-1-1z"/>
<path d="m45.03 39c-.552 0-1 .448-1 1v17c0 .552.448 1 1 1s1-.448 1-1v-17c0-.552-.448-1-1-1z"/>
<path d="m41.03 39c-.552 0-1 .448-1 1v17c0 .552.448 1 1 1s1-.448 1-1v-17c0-.552-.448-1-1-1z"/>
<path d="m37.03 39c-.552 0-1 .448-1 1v17c0 .552.448 1 1 1s1-.448 1-1v-17c0-.552-.448-1-1-1z"/>
<path d="m33.03 39c-.552 0-1 .448-1 1v17c0 .552.448 1 1 1s1-.448 1-1v-17c0-.552-.448-1-1-1z"/>
<path d="m40.03 1.414v2.586h2.586z"/><circle cx="50.03" cy="27" r="2"/>
<path d="m55.032 21h-10.002-32-12.002c-.551 0-.998.447-.998.998v18.004c0 .551.447.998.998.998h6.999c1.106 0 2.003-.897 2.003-2.003v-.997c0-.552.448-1 1-1h36c.553 0 1 .448 1 1v.997c0 1.106.897 2.003 2.003 2.003h4.999c.551 0 .998-.447.998-.998v-18.004c0-.551-.447-.998-.998-.998zm-50.002 9h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm6 0h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm6 0h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-14c-.552 0-1-.448-1-1s.448-1 1-1h14c.552 0 1 .448 1 1s-.448 1-1 1zm33 5c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.795 4-4 4z"/><path d="m44.03 6h-5c-.552 0-1-.448-1-1v-5h-21.999c-1.105 0-2.001.896-2.001 2.001v16.999h30zm-21-3h12c.552 0 1 .448 1 1s-.448 1-1 1h-12c-.552 0-1-.448-1-1s.448-1 1-1zm13 5c0 .552-.448 1-1 1h-4c-.552 0-1-.448-1-1s.448-1 1-1h4c.552 0 1 .448 1 1zm-19-5h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1zm0 4h9.97c.552 0 1 .448 1 1s-.448 1-1 1h-9.97c-.552 0-1-.448-1-1s.448-1 1-1zm0 4h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1zm9.97 6h-9.97c-.552 0-1-.448-1-1s.448-1 1-1h9.97c.552 0 1 .448 1 1s-.448 1-1 1zm14.03 0h-10c-.552 0-1-.448-1-1s.448-1 1-1h10c.552 0 1 .448 1 1s-.448 1-1 1zm0-4h-18c-.552 0-1-.448-1-1s.448-1 1-1h18c.552 0 1 .448 1 1s-.448 1-1 1z"/></svg>)

import { Profile, SidebarNav, UpgradePlan } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'IAM Helper',
      href: '/iam_graph',
      icon: user_lock
    },
    {
      title: 'Sar Browser',
      href: '/sar_browser',
      icon: gear_icon
    },
    {
      title: 'Diff',
      href: '/diff',
      icon: diff_icon
    },
    {
      title: 'SAM Destroy',
      href: '/destroy',
      icon: shredder_icon
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        <UpgradePlan />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
