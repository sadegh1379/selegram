import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React , {useContext , useState} from 'react';
import clsx from 'clsx'
import {context} from '../../context';
import OrderItem from './OrderItem';
import BottomAppBar from '../static/BottomAppBar';


const useStyles = makeStyles(()=>({
    buttonGrid:{
        backgroundColor:'#EEEEEE',
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
            color:'#FFFFFF',
        },
        '&:focus':{
            backgroundColor:'#009FFF',
            color:'#FFFFFF',
        },
        fontWeight:'bold',
        color:'#8FAFB3',
        margin:'0 5px',
        height:'30px',

    },
    active:{
        backgroundColor:'#009FFF',
        color:'white'
    },
    total:{
        margin:'100px 10px',
        border:'3px solid #009FFF',
        borderRadius:'10px',
        // padding:'10px',

    },
    totalText:{
        display:'flex',
        justifyContent:'space-around',
        opacity:'0.6',
        margin:'19px auto'
    },
    totalBtn:{
        backgroundColor:'#009FFF',
        color:'#FFFFFF',
        fontFamily:'BYekan',
        textAlign:'center',
        margin:'10px 5px' ,
        width:'300px',
        boxShadow:'5px 7px 30px grey',
        '&:focus , &:active ':{
            backgroundColor:'#009FFF',
            color:'#FFFFFF',
            fontFamily:'BYekan',
        }
    },
    // bottomappbar:{
    //     display:'fixed'
    // }
}))

function Orders() {
    const classes = useStyles();
    const [page , setPage]= useState('active');

    const data = useContext(context);
    const {cart} = data;
    console.log(cart);

    

    return (
        <Grid>
           

            {/* top buttons */}
            <Grid className={classes.buttonGrid}>
                
                
                    <Button onClick={()=>setPage('active')}  className={clsx(classes.Button )}  variant="contained" size="medium" >
                        سفارش های فعال
                    </Button>
                    <Button onClick={()=>setPage('history')} className={classes.Button}  variant="contained" size="medium">
                        سوابق سفارش
                    </Button>
                
            </Grid>
            
            {page === 'active'? 
                (
                    <>
                        <Grid>
                            {
                                cart.length > 0 ?  cart.map((item , i)=><OrderItem key={i} cart={item}/>) : null
                            }
                        </Grid>
                        <Grid className={classes.total}>
                            <Grid className={classes.totalText}>
                                <Typography variant="subtitle1" gutterBottom>مجموع قیمت (دو کالا)</Typography>
                                <Typography variant="overline" display="block" gutterBottom>200.200.000 تومان</Typography>
                            </Grid>
                            <Grid className="text-center">
                                <Button className={classes.totalBtn}>ثبت نهایی این سفارش</Button>
                            </Grid>
                        </Grid>
                   
                    </>
                )  :
                (
                    <h1>history</h1>
                )  
        }

           {/* bottom  app bar*/}
           <Grid className={classes.bottomappbar}>
                <BottomAppBar/>
           </Grid>
              
        </Grid>
    )
}

export default Orders;
