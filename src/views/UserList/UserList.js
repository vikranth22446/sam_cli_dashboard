import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { UsersToolbar, UsersTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        Created: [],
        Changed: [],
        Deleted: []
      }
    };
  }
  componentDidMount() {
    this.mounted = true;
    fetch('http://127.0.0.1:5000/get_diff', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        template:
          '/Users/viksriva/Documents/sandbox/SamCliTelemetryIngestionLambda/template.yaml',
        stack_name: 'SamCliTelemetryIngestionLambda-dev-viksriva-stack'
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ data });
      });
  }

  render() {
    var classes = {
      root: {
        padding: '3px'
      },
      content: {
        marginTop: '2px'
      }
    };
    return (
      <div>
        <div style={{ padding: '20px' }}>
          <Typography variant="h3">Created</Typography>
          <br />
          <br />
          <UsersTable users={this.state.data.Created} />
          <br />
          <br />
          <Typography variant="h3">Changed</Typography>
          <br />
          <br />
          <UsersTable users={this.state.data.Changed} />
          <br />
          <br />
          <Typography variant="h3">Deleted</Typography>
          <br />
          <UsersTable users={this.state.data.Deleted} />
        </div>
      </div>
    );
  }
}
