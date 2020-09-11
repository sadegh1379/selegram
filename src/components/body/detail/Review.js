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
    }
})

function Review() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid>
                <small className="opacity-8" style={{fontWeight:'small' , color:'#707070'}}>یخجال و فریزر «امرسان» مدل «FN15D-RH15D» محصولی کارآمد و باکیفیت از این تولیدکننده‌ی داخلی است که در دسته‌ی یخچال و فریزرهای دوقلو قرار می‌گیرد. این دستگاه در واقع از دو فضای بزرگ، مجهز و جداگانه برای دو بخش یخچال و فریزر بهره‌مند است و به این ترتیب فضای زیادی را برای سرمایش و انجماد مواد غذایی در اختیار شما قرار می‌دهد. </small>
            </Grid>
            
             <Grid className={classes.atherCmd}>
                  <p className="font-yekan">
                      ادامه نقد و بررسی این کالا
                  </p>
                  <IconButton >
                    <ArrowBackIosIcon className="lighblue"/>
                  </IconButton>
                </Grid>
        </Grid>
    )
}

export default Review
