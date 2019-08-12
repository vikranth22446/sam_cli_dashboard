import { GraphView } from 'react-digraph';
import React, { Component } from 'react';

const GraphConfig = {
  NodeTypes: {
    empty: {
      // required to show empty nodes
      typeText: 'None',
      shapeId: '#empty', // relates to the type property of a node
      shape: (
        <symbol
          id="empty"
          key="0"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
          />
        </symbol>
      )
    },
    custom: {
      // required to show empty nodes
      typeText: 'Custom',
      shapeId: '#custom', // relates to the type property of a node
      shape: (
        <symbol
          id="custom"
          key="0"
          viewBox="0 0 50 25"
        >
          <ellipse
            cx="50"
            cy="25"
            rx="50"
            ry="25"
          />
        </symbol>
      )
    }
  },
  NodeSubtypes: {},
  EdgeTypes: {
    emptyEdge: {
      // required to show empty edges
      shapeId: '#emptyEdge',
      shape: (
        <symbol
          id="emptyEdge"
          key="0"
          viewBox="0 0 50 50"
        >
          <circle
            cx="25"
            cy="25"
            fill="currentColor"
            r="8"
          >
            {' '}
          </circle>
        </symbol>
      )
    }
  }
};

const NODE_KEY = 'id'; // Allows D3 to correctly update DOM

export default class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        nodes: [],
        edges: []
      },
      selected: {}
    };
    this.GraphView = React.createRef();
  }

  onCreateEdge = (sourceViewNode, targetViewNode) => {
    const graph = this.state.data;
    // This is just an example - any sort of logic
    // could be used here to determine edge type
    // const type =
    //   sourceViewNode.type === SPECIAL_TYPE
    //     ? SPECIAL_EDGE_TYPE
    //     : EMPTY_EDGE_TYPE;

    const viewEdge = {
      source: sourceViewNode[NODE_KEY],
      target: targetViewNode[NODE_KEY],
      type: 'test'
    };

    // Only add the edge when the source node is not the same as the target
    if (viewEdge.source !== viewEdge.target) {
      graph.edges = [...graph.edges, viewEdge];
      this.setState({
        graph,
        selected: viewEdge
      });
    }
  };

  // Called when an edge is deleted
  onDeleteEdge = (viewEdge, edges) => {
    const data = this.state.data;

    data.edges = edges;
    this.setState({
      data,
      selected: null
    });
  };
  onSwapEdge = (sourceViewNode, targetViewNode, viewEdge) => {
    const data = this.state.data;
    const i = this.getEdgeIndex(viewEdge);
    const edge = JSON.parse(JSON.stringify(data.edges[i]));

    edge.source = sourceViewNode[NODE_KEY];
    edge.target = targetViewNode[NODE_KEY];
    data.edges[i] = edge;
    // reassign the array reference if you want the graph to re-render a swapped edge
    data.edges = [...data.edges];

    this.setState({
      data,
      selected: edge
    });
  };
  load_nodes() {
    var forceStrength = 20;
    var edgeDistance = 20;
    var width = 300;
    var hieght = 300;
    var d3 = require('d3-force');
    console.log(this.state.data.nodes);
    console.log(this.state.data.edges);

    this.force = d3
      .forceSimulation(this.state.data.nodes)
      .force('charge', d3.forceManyBody().strength(forceStrength))
      // .force(
      //   'link',
      //   d3
      //     .forceLink()
      //     .distance(edgeDistance)
      //     .links(this.state.data.edges)
      // )
      // .force('x', d3.forceX(width / 2))
      // .force('y', d3.forceY(hieght / 2));

    this.force.on('tick', () =>
      this.setState({
        edges: this.state.data.edges,
        nodes: this.state.data.nodes
      })
    );
  }
  componentDidMount() {
    fetch('http://127.0.0.1:5000/get_iam_react_graph', {
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

  componentWillUnmount() {
    if (this.force) {
      this.force.stop();
    }
  }
  /* Define custom graph editing methods here */

  render() {
    const nodes = this.state.data.nodes;
    const edges = this.state.data.edges;
    const selected = this.state.selected;

    const NodeTypes = GraphConfig.NodeTypes;
    const NodeSubtypes = GraphConfig.NodeSubtypes;
    const EdgeTypes = GraphConfig.EdgeTypes;

    return (
      <div
        id="graph"
        style={{
          display: 'block',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden'
        }}
        // style={styles.graph}
      >
        <GraphView
          edges={edges}
          edgeTypes={EdgeTypes}
          nodeKey={NODE_KEY}
          nodes={nodes}
          nodeSubtypes={NodeSubtypes}
          nodeTypes={NodeTypes}
          onCreateEdge={this.onCreateEdge}
          onDeleteEdge={this.onDeleteEdge}
          onSwapEdge={this.onSwapEdge}
          onUpdateNode={this.onUpdateNode}
          ref={el => (this.GraphView = el)}
          selected={selected}
        />
      </div>
    );
  }
}
