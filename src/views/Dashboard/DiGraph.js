import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import BottomNav from './BottomNavigation'

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


class DashGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nodes: [],
        edges: []
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
      "physics": {
        "barnesHut": {
          "avoidOverlap": 0.3
        },
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
        graph_IngestionApi: { color: { background: '#ffffff' }, borderWidth: 3 }
      }
    };

    var network = new vis.Network(this.network_ref.current, data, options);
    var props = this.props
    console.log(props)
    network.on( 'click', function(properties) {
      console.log(properties)
       var ids = properties.nodes;
      var clickedNodes = data.nodes.get(ids);
      console.log('clicked nodes:', clickedNodes);
      if(clickedNodes.length !== 0) {
        props.changePanelOpen()
      }
    });
    if(this.props.iam) {
        network.enableEditMode()
    }
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
          // width: '100vw',
          overflow: 'hidden'
        }}
      />
    );
  }
}

export default DashGraph;