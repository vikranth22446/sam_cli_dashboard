import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import BottomNav from './BottomNavigation'
import Checkbox from '@material-ui/core/Checkbox'

import DashGraph from "./DiGraph";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const IAMDashboard = () => {
  const classes = useStyles();
  const [clicked, onClick] = useState(false);
  console.log(clicked)
  var width_c = 12;
  var width_r = 0;

  if(clicked){
    var width_c = 10;
    var width_r = 2;
  }
  console.log(width_c, width_r)
  var checkbox_items = [
      "BatchGetItem",
      "BatchWriteItem",
      "ConditionCheckItem",
      "CreateBackup",
      "CreateGlobalTable",
      "CreateTable",
      "DeleteBackup",
      "DeleteItem",
      "DeleteTable",
      "DescribeBackup"
  ]
  return (
    <div>
      <Grid container>
        <Grid item xs={width_c}>
          <DashGraph changePanelOpen={() => onClick(true)} iam={true} />
        </Grid>

        {clicked && <Grid item xs={width_r}>
          <Card style={{
          display: 'block',
          height: '100vh'}}>
            <CardContent>
              IAM Policy for Resource
                <br/>
             Simulated via Policy SIM
              <br/>
              List of Policies Available:
                <br/>
            { checkbox_items.map(x =>
                <div>
                   <input type="checkbox" name={x} value={x} /> {x}<br/>
                  
                </div>
            )}
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </Grid> }
      </Grid>
      <BottomNav  iam={true} />
    </div>
    // <div className={classes.root}>
      
    // </div>
  );
};

export default IAMDashboard;
