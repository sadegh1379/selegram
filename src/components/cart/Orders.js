import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(()=>({
    buttonGrid:{
        backgroundColor:'#DCD2D2',
        textAlign:'center',
        padding:'10px 15px',
        width:'auto',
        borderRadius:'15px',
        fontFamily:'BYekan',
        margin:'0 10%'
    },
    Button:{
        borderRadius:'10px',
        backgroundColor:'transparent',
        '&:active':{
            backgroundColor:'#009FFF',
        },
        '&:focus':{
            backgroundColor:'#009FFF',
        },
        fontWeight:'bold',
        color:'#FFFFFF',
        margin:'0 5px'

    }
}))

function Orders() {
    const classes = useStyles();
    return (
        <Grid>

            {/* top buttons */}
            <Grid className={classes.buttonGrid}>
                
                    <Button  className={classes.Button}  variant="contained" size="medium" >
                        سفارش های فعال
                    </Button>
                    <Button className={classes.Button}  variant="contained" size="medium">
                        سوابق سفارش
                    </Button>
                
            </Grid>

        </Grid>
    )
}

export default Orders;
