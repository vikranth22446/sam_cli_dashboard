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
    // var vis = require('vis-network');
    // var options = {
    //   physics: {
    //     stabilization: false,
    //     barnesHut: {
    //       springLength: 200
    //     }
    //   }
    // };
    // var data = {};
    // var network = new vis.Network(this.network_ref.current, data, options);
    // data = vis.network.convertDot(this.state.data.dot);
    // network.setData(data);
    // var clustering_options = {
    //   joinCondition: function(nodeOptions) {
    //     return true;
    //   },
    //   processProperties: function(clusterOptions, childNodes, childEdges) {
    //     // var totalMass = 0;
    //     // var totalValue = 0;
    //     // for (var i = 0; i < childNodes.length; i++) {
    //     //   totalMass += childNodes[i].mass;
    //     //   totalValue = childNodes[i].value
    //     //     ? totalValue + childNodes[i].value
    //     //     : totalValue;
    //     // }
    //     // clusterOptions.mass = totalMass;
    //     // if (totalValue > 0) {
    //     //   clusterOptions.value = totalValue;
    //     // }
    //     clusterOptions.shadow = true;
    //     clusterOptions.color = "#ffffff";
    //     clusterOptions.style = "dotted";
    //     return clusterOptions;
    //   }
    // };
    // network.clustering.cluster(clustering_options);
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
      .then(response => response.json())
      .then(data => {
        this.setState({ data }, () => this.load_nodes());
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
