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
class DashGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [
          { id: 1, label: 'Node 1' },
          { id: 2, label: 'Node 2' },
          { id: 3, label: 'Node 3' },
          { id: 4, label: 'Node 4' },
          { id: 5, label: 'Node 5' }
        ],
        edges: [
          { from: 1, to: 3 },
          { from: 1, to: 2 },
          { from: 2, to: 4 },
          { from: 2, to: 5 },
          { from: 3, to: 3 }
        ]
      }
    };
    this.network_ref = React.createRef();
  }
  load_nodes() {
    console.log(this.state.data);
    var vis = require('vis-network');
    var nodesDataset = new vis.DataSet(this.state.data.nodes);
    var edgesDataset = new vis.DataSet(this.state.data.edges);

    var data = {
      nodes: nodesDataset,
      edges: edgesDataset
    };
    var options = {
      edges: {
        smooth: {
          forceDirection: 'none'
        }
      },
      nodes: {
        shape: 'circularImage',
        image:
          'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fparty-icons-1%2F512%2Fhttp-512.png&f=1',
        color: '#ffffff',
        fixed: false,
        scaling: {
          label: true
        },
        shadow: true
      },
      groups: {
        // graph_Outputs: {},
        // graph_Parameters: {},
        graph_IngestionApi: { color: { background: '#ffffff' }, borderWidth: 3 }
      }
    };

    var network = new vis.Network(this.network_ref.current, data, options);
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
    fetch('http://127.0.0.1:5000/get_graph_data', {
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
        ref={this.network_ref}
        style={{
          display: 'block',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden'
        }}
      />
    );
  }
}

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DashGraph />
    </div>
  );
};

export default Dashboard;
