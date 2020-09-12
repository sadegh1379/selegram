import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        backgroundColor:'#F5F5F5',
        fontFamily:'BYekan',
        margin:'10px',
        padding:'10px',
        borderRadius:'10px',
        

    },
    atherCmd:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        color:'#009FFF',
        fontSize:'14px'
    },
    body:{
        lineHeight:'10px'
    }
})

function Review({text}) {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid className={classes.body}>
                <small className="opacity-8" style={{fontWeight:'small' , color:'#707070'}}>
                    {text.map((item , i)=>{
                        return (<p key={i}>{item}</p>)
                    })}
                    
                    
                </small>
            </Grid>
            
             <Grid className={classes.atherCmd}>
                  <p className="font-yekan">
                     سایر مشخصات فنی
                  </p>
                  <IconButton >
                    <ArrowBackIosIcon className="lighblue"/>
                  </IconButton>
                </Grid>
        </Grid>
    )
}

export default Review
