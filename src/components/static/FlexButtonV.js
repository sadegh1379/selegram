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
        flexDirection:'column',
        position:'absolute',
        marginTop:'10%'
        
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

function FlexButtonV({changeColor , id}) {
    const classes = useStyles()
    return (
        <Grid className={classes.root}>
            <Grid onClick={(e)=>changeColor(id , 'grey')} className={clsx(classes.icons , classes.grey)}></Grid>
            <Grid onClick={(e)=>changeColor(id , 'white')} className={clsx(classes.icons , classes.white)}></Grid>
            <Grid onClick={(e)=>changeColor(id , 'blue')} className={clsx(classes.icons , classes.blue)}></Grid>
            <Grid onClick={(e)=>changeColor(id , 'red')} className={clsx(classes.icons , classes.red)}></Grid>
        </Grid>
    )
}

export default FlexButtonV
