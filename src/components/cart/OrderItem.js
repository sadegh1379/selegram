import { Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import React  from 'react';



const useStyles = makeStyles(()=>({
    root:{
        height:'140.5px',
        padding:'10px 5px',
        marginTop:'50px',
    },
    cartHead:{
        display:'flex',
        alignItems:'center',
        fontFamily:'BYekan',
        justifyContent:'space-around',
        marginBottom:'0px',
        marginTop:'20px',
        paddingBottom:'0px',
        borderBottom:'1px solid lightgrey'
    },
    cartGrid:{
        display:'flex',
        // width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        textAlign:'center',
        fontFamily:'BYekan',
        padding:'5px',
    },
    buttonGroups:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
        
    }
}))

function OrderItem({cart}) {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid className={classes.cartHead}>
                <p className="lighblue font-12-px">لوازم خانگی ایگلس</p>
                <p className=" font-10-px opacity-5 ml-5">گارانتی 26 ماهه</p>
               
            </Grid>
            <Grid className={classes.cartGrid}>
                <Grid>
                    <img style={{width:'92px'}} src={cart.img} />
                </Grid>
                <Grid className="width-100 text-right">
                    <Typography className="font-yekan"  variant="body2" gutterBottom>یخچال فریزر</Typography>
                    <Typography variant="caption" display="block" gutterBottom>نقره ای متالیک</Typography>
                    <Typography className="lighblue" variant="subtitle2" gutterBottom>قیمت : 200.200.000</Typography>
                </Grid>
                <Grid className={classes.buttonGroups}>
                    <Button ><AddBoxOutlinedIcon className="lighblue"/></Button>
                    <Button>2</Button>
                    <Button ><DeleteForeverOutlinedIcon className="lighblue"/></Button>
                </Grid>
            </Grid><hr/>
        </Grid>
    )
}

export default OrderItem
