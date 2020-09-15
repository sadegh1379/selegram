import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';


function ColorCheck({color}) {

    const useStyles = makeStyles(()=>({
        root:{
            display:'flex',
        },
        span:{
            backgroundColor:color,
            width:'15px',
            height:'15px',
            border:'1px solid grey',
            margin:'3px',
            borderRadius:'3px',
        }
    }))
    

    const classes = useStyles()

    let sendColor ;

    switch(color){
        case 'red':
            sendColor = 'قرمز روشن'
        break;
        case 'white':
            sendColor = ' سفید روشن'
        break;
        case 'grey':
            sendColor = 'نقره ای متالیک'
        break;
        case 'blue':
            sendColor = 'آبی روشن'
        break;
        default:
            sendColor = color;
        break;
   
    }



    return (
        <Grid className={classes.root}>
            <Grid className={classes.span}></Grid>
            <Typography variant="caption" display="block" gutterBottom>{sendColor}</Typography>
            
        </Grid>
    )
}

export default ColorCheck






 