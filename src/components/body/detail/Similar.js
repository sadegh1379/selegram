import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import FlexButton from '../../static/FlexButton';

const useStyles = makeStyles({
    root:{
      fontFamily:'BYekan',
      margin:'20px 0px',
      display:'flex',
      height:'93px',
      padding:'0px',
      lineHeight:'5px',
    },
   
})

function Similar({img}) {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
             <Grid  item md={3} sm={3} xs={3}>
                    <img style={{width:'100%'}} src={img} alt="img"/>
             </Grid>
             <Grid  item md={9} sm={9} xs={9}>
                <p className="font-10-px"> یخچال و فریزر دوقلوی سامسونگ مدل  RR30PN-RZ30PN </p>
                    <Grid className="d-flex width-100">
                        <Grid item md={6} sm={6} xs={6}><p className="font-10-px opacity-5">رنگبندی های موجود:  </p></Grid>
                        <FlexButton/>
                    </Grid>
                
                <p className="font-10-px">قیمت همکار:  28.840.000 تومان</p>
                <p className="font-10-px">قیمت تک فروشی: 30.580.000 تومان</p>
             </Grid>
        </Grid>
    )
}

export default Similar;
