import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import BottomNav from './BottomNavigation'
import DashGraph from "./DiGraph";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [clicked, onClick] = useState(false);
  console.log(clicked)
  var width_c = 12;
  var width_r = 0;

  if(clicked){
    var width_c = 9;
    var width_r = 3;
  }
  console.log(width_c, width_r)
  return (
    <div>
      <Grid container>
        <Grid item xs={width_c}>
          <DashGraph changePanelOpen={() => onClick(true)} iam={false}/>
        </Grid>

        {clicked && <Grid item xs={width_r}>
          <Card style={{
          display: 'block',
          height: '100vh'}}>
            <CardContent>
              Resource Data
              <br/>
              <Typography component="h5" variant="h5">
              Resource Type: AWS::ApiGateway::RestApi
              </Typography>
              <br/>
              <Typography component="h5" variant="h5">
              Logical ID: IngestionApi
              </Typography>
              <br/>
              <Typography component="h5" variant="h5">
              Physical Resource ID: biuoreoha0
              </Typography>
              <br/>
              <Typography component="h5" variant="h5">
              Status: CREATE_COMPLETE
              </Typography>
              <br/>
              ...Other Information

              
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </Grid> }
      </Grid>

      <BottomNav  iam={false} />
    </div>
    // <div className={classes.root}>
      
    // </div>
  );
};

export default Dashboard;
