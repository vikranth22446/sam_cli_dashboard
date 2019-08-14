import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import BottomTopTabs from './BottomTopTabs'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  const [open, onOpen] = useState(false)
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  if(open) {
    var root = <Paper className={classes.root} style={{ position: 'fixed',
            bottom: 0,
            right: 0,
            marginLeft: "5px",
            background: '#fff',            
            boxShadow: "1px 1px 5px grey",
            width: "100%",
            position: "fixed",
            height: "250px"
            }}>
            <div style={{"paddingLeft": "260px"}}>
                <Grid container>
                    <Grid item xs={11}>
                        <Typography variant="h5" component="h3">
                        Dashboard Console
                        </Typography>
                    </Grid>

                    <Grid item xs={1}>
                    <Button onClick={() => onOpen(false)} variant="contained" >
                        Close Logging
                    </Button>
                  
                    </Grid>
                </Grid>
                <Grid container style={{ 'overflow-y': 'auto', 'height': '220px'}}>
                    
                        <Typography component="p">
                        
                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        TEWST OIASDFJASDASJDIFASJDF 
                        THIS IS A TEST DEFCON 1

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        TEWST OIASDFJASDASJDIFASJDF 
                        THIS IS A TEST DEFCON 1

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        TEWST OIASDFJASDASJDIFASJDF 
                        THIS IS A TEST DEFCON 1

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />

                        CloudWatch Log Warn: Sample Log 
                       <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        CloudWatch Log Warn: Sample Log 
                        <br />
                        TEWST OIASDFJASDASJDIFASJDF 
                        THIS IS A TEST DEFCON 5
                        </Typography>
                </Grid>
            </div>
      </Paper>
  }else {
    var root = <Paper className={classes.root} style={{ 
            bottom: 0,
            right: 0,
            background: '#fff',
            height: "80px",
            marginLeft: "5px",
            width: "100%",
            position: "fixed",
            boxShadow: "1px 1px 5px grey"
            }}>
            <div style={{"paddingLeft": "260px"}}>
            <Grid container>
                <Grid item xs={10}>
                    <Typography component="p">
                        View The Cloud Watch Logs
                    </Typography>
                    <Button onClick={() => onOpen(true)} variant="contained" >
                            One Click Deploy
                        </Button>
                        <br/>
                </Grid>
                <Grid item xs={2}>
                    
                    <Typography variant="h5" component="h3">
                    
                        <Button onClick={() => onOpen(true)} variant="contained" >
                            Open Logging
                        </Button>
                        <Button variant="contained" >
                            <a href={"http://127.0.0.1:5000/get_static_dot_svg?template=" + '/Users/viksriva/Documents/sandbox/SamCliTelemetryIngestionLambda/template.yaml'} download>Download Graph</a>
                        </Button>
                        </Typography>
                </Grid>
            </Grid>
            
         
            </div>
      </Paper>
  }
  return (
      <div>
      { root }
      </div>
  
  );
}