import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx'


const useStyles = makeStyles({
    icons:{
        width:'13px ',
        height:'13px',
        // backgroundColor:'red',
        margin:'3px',
        borderRadius:'3px',
        border:'1px solid grey'

    },
    root:{
        display:'flex',
        
        alignItems:'center',
        width:'100%'
        
    },
    red:{
        backgroundColor:'red'
    },
    white:{
        backgroundColor:'white'
    },
    blue:{
        backgroundColor:'blue'
    },
    grey:{
        backgroundColor:'grey'
    }
})

function FlexButton() {
    const classes = useStyles()
    return (
        <Grid className={classes.root}>
            <Grid className={clsx(classes.icons , classes.grey)}></Grid>
            <Grid className={clsx(classes.icons , classes.white)}></Grid>
            <Grid className={clsx(classes.icons , classes.blue)}></Grid>
            <Grid className={clsx(classes.icons , classes.red)}></Grid>
        </Grid>
    )
}

export default FlexButton
