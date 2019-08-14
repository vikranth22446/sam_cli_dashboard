import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders
} from './components';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));
class StaticDashGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        url: ''
      }
    };
    this.network_ref = React.createRef();
  }
  load_nodes() {
  }
  componentDidMount() {
    this.mounted = true;
    fetch('http://127.0.0.1:5000/get_static_dot_svg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        template:
          '/Users/viksriva/Documents/sandbox/SamCliTelemetryIngestionLambda/template.yaml'
      })
    })
      // .then(response => response.json())
      .then(response => {
        // const filename =  response.headers.get('Content-Disposition').split('filename=')[1];
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'resources.png';
          a.click();
          setTimeout(function(){
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
          }, 100);  
        });

        // this.setState({ data }, () => this.load_nodes());
      });
  }

  render() {
    return (
      <div
        className="App"
        style={{
          display: 'block',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden'
        }}
      >
        <img src={'http://localhost:5000/static/' + this.state.data.url} />
      </div>
    );
  }
}

const DotDashboard = props => {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root}>
      <StaticDashGraph />
    </div>
  );
};

export default DotDashboard;
