import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const useStyles = makeStyles((theme)=>({
    root:{
        // backgroundColor:'grey',
        padding:'10px',
        border:'1px solid lightgrey',
        borderRadius:'5px',
        height:'121px',
        marginBottom:'10px',
        
         
    }
}))

function DetailItem() {
    const classes = useStyles();
    return (
            <Grid className={classes.root}>

                <Grid className="d-flex flex-between font-yekan">
                    <Grid>
                        <p className="font-12-px">تجارت پویا</p>
                        <p className="font-12-px opacity-5" >36 ماهه سام سرویس</p>
                    </Grid>
                    <Grid className="d-flex flex-between flex-items-center" >
                        <p className="lighblue">جزئیات</p>
                        <IconButton>
                            <ArrowBackIosIcon className="lighblue"/>
                        </IconButton>
                    </Grid>
                </Grid><hr className="opacity-5"/>
                <Grid className="d-flex flex-between ">
                    <Grid className="width-100">  
                        <p className="font-12-px bold opacity-5">قیمت برای همکار</p>
                        <p className="font-12-px " ><span className="money-color">22.228.000</span> <span className="toman-blue">تومان</span></p>
                    </Grid>
                    <Grid className="text-right width-100 ">  
                        <p className="font-12-px opacity-5">قیمت(برای تک فروش)</p>
                        <p className="font-12-px " ><span className="money-color">22.228.000</span> <span className="toman-blue">تومان</span></p>
                    </Grid>
                </Grid>

            </Grid>
    )
}

export default DetailItem
