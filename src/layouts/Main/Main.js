import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import { default as Sidebar } from './Sidebar';
import { default as Topbar } from './Topbar';
import { default as Footer } from './Footer';
import DragAndDrop from './DragDrop'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));

const Main = props => {
  const { children } = props;
  const [files, setFiles] = useState([])
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;
  
  const handleDrop = (files) => {
    setFiles(files)
  }

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
    <DragAndDrop handleDrop={handleDrop} className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })} style={{'display': 'block'}}>
          <Topbar onSidebarOpen={handleSidebarOpen} />
          <Sidebar
            onClose={handleSidebarClose}
            open={shouldOpenSidebar}
            variant={isDesktop ? 'persistent' : 'temporary'}
          />
          <main className={classes.content}>
            {children}
          </main>
        </DragAndDrop>

    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
