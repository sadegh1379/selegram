import { Avatar, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import avatar from './img/user.png';
import ice from './img/ice.png';
import React  from 'react';



const useStyles = makeStyles(()=>({
    root:{
        // height:'140.5px',
        padding:'5px 5px',
        // marginTop:'50px',
        
    },
    cartHead:{
        display:'flex',
        alignItems:'center',
        fontFamily:'BYekan',
        justifyContent:'space-between',
        
        
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
    avatar:{
        width:'40px',
        height:'40px',
    },
    bottom:{
        borderBottom:'1px solid lightgrey',
        padding:'10px',
    }
   
}))

function RequestItem() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid className={classes.cartHead}>
               <Grid><Avatar className={classes.avatar} alt="Remy Sharp" src={avatar} /></Grid>
               <Grid className="text-right width-100 ">
                    <Typography variant="caption" display="block" gutterBottom>1 درخواست از : </Typography>
                    <Typography className="lighblue font-yekan" variant="h6" gutterBottom>سعید غلامی منش (همکار )</Typography>
               </Grid>
               <Grid className="text-center">
                   <IconButton>
                        <MoreHorizIcon/>
                   </IconButton>
                   <p className="font-yekan text-center font-10-px" >3 ساعت پیش </p>
               </Grid>
               
            </Grid>
            <Grid className={classes.cartGrid}>
                <Grid>
                    <img alt="loading..." style={{width:'92px'}} src={ice} />
                </Grid>
                <Grid className="width-100 text-right">
                    <Typography className="font-yekan"  variant="body2" gutterBottom>یخچال فریزر</Typography>
                    <Typography variant="caption" display="block" gutterBottom>نقره ای متالیک</Typography>
                    <Typography className="lighblue" variant="subtitle2" gutterBottom>قیمت : 200.200.000</Typography>
                </Grid>
            </Grid>
            <Grid className={classes.bottom}>
                <Typography className="font-yekan"  variant="body2" gutterBottom>قیمت همکاری: 23.850.000 تومان</Typography>
                <Typography className="font-yekan"  variant="body2" gutterBottom>نوع خرید: قسطی</Typography>
            </Grid>
        </Grid>
    )
}

export default RequestItem
