import React, { Component, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Search from './Search'

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default class SarBrowser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                applications: [],
            },
            offset: 0,
            pageCount: 0,
            query: "",
            openSnackBar: false,
            };
        this.load_data = this.load_data.bind(this)
        this.onSearch = this.onSearch.bind(this)
        this.handleCheckout = this.handleCheckout.bind(this)
        this.handleSnackClose = this.handleSnackClose.bind(this)

    }
    
    load_data(event) {
        var page_number = event.target.id;
        var search_query = this.state.query
        if(event.target.search_query){
            var search_query = event.target.search_query;
        }
        if(page_number < 0) {
            return
        }

        this.setState({
            pageCount: Number(event.target.id),
            query: search_query
        });
        fetch('http://127.0.0.1:5000/get_sar_repos', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                page_number: page_number + 1,
                search_query: search_query
            })
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ data , pageCount: page_number});
            });   
    }

    handleCheckout(url) {
        fetch('http://127.0.0.1:5000/generate', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: url
            })
            })
        .then(response => response.json())
        .then(data => {
            console.log(data);
                this.setState({openSnackBar: true, snackBarMessage: data.message})
            // this.setState({ data.url: data.url });
        });   
    }

    onSearch(query) {
        this.load_data({target: {id: this.state.pageCount, search_query: query}})
    }

    componentDidMount() {
        this.load_data({target: {id: 0}})
    }

    handleSnackClose() {
        this.setState({openSnackBar: false})
    }
     
    render() {
        console.log(this.state.data.applications)
        if(this.state.data.applications.length == 0){
            return <div>
                            <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
                               Loading SAR Repo
                                </Typography>
            </div>
        }
        return (
              <div className="commentBox">
                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    open={this.state.openSnackBar}
                    autoHideDuration={6000}
                    onClose={() => this.handleSnackClose()}
                    ContentProps={{
                    'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.snackBarMessage}</span>}
                    action={[
                    <Button key="undo" color="secondary" size="small" onClick={() => handleSnackClose()}>
                        UNDO
                    </Button>,
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        style={{
                          padding: "0.5px",
                        }}
                        onClick={() => handleSnackClose()}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
                <Search data={this.state.query} onSearch={(query) => this.onSearch(query)}/>
                <br/>
                <Grid container spacing={8}>

                { this.state.data.applications.map( (item, i) => {
                    return <Grid item xs={3}>
                        <Card style={{ minWidth: 275}}>
                            <CardContent>
                                <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
                                {item.name}
                                </Typography>
                                <Typography style={{marginBottom: 12}} color="textSecondary">
                                {item.description}
                                </Typography>
                                <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={(event) => this.handleCheckout(item.homePageUrl)}>Checkout</Button>
                                <Button size="small">Deploy</Button>
                            </CardActions>
                            </Card> 
                    </Grid>
                })
                }
                </Grid>

               <Typography variant="h4" gutterBottom>
               Current Page {this.state.pageCount + 1}
               </Typography>
               <Button size="medium" onClick={() => this.load_data({target: {id: this.state.pageCount - 1}})}>Previous Page</Button>
               <Button size="medium" onClick={() => this.load_data({target: {id: this.state.pageCount + 1}})}>Next Page</Button>
            </div>
        )
    }
}
