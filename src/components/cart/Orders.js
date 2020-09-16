import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React , {useContext , useState} from 'react';
import clsx from 'clsx'
import {context} from '../../context';
import OrderItem from './OrderItem';
import AddCama from '../static/AddCama';



const useStyles = makeStyles(()=>({
    buttonGrid:{
        backgroundColor:'#EEEEEE',
        textAlign:'center',
        padding:'10px 15px',
        width:'auto',
        borderRadius:'15px',
        fontFamily:'BYekan',
        margin:'20px 10%'
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
        

    },
    active:{
        backgroundColor:'#009FFF',
        color:'white'
    },
    total:{
        margin:'100px 10px',
        border:'2px solid #009FFF',
        borderRadius:'10px',
        // padding:'10px',

    },
    totalText:{
        display:'flex',
        justifyContent:'space-around',
        fontFamily:'BYekan',
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

}))

function Orders() {
    const classes = useStyles();
    const [page , setPage]= useState('active');

    const data = useContext(context);
    const {cart , increament , decreament , removeItem , payment} = data;
    

    return (
        <Grid>
           

            {/* top buttons */}
            <Grid className={classes.buttonGrid}>
              
                
                
                    <Button onClick={()=>setPage('active')}  className={clsx(classes.Button , classes.active)}  variant="contained" size="medium" >
                        سفارش های فعال
                    </Button>
                    <Button onClick={()=>setPage('history')} className={classes.Button}  variant="contained" size="medium">
                        سوابق سفارش
                    </Button>
                
            </Grid>
            
            {page === 'active'? 
                (
                    <>
                        <Grid className="wow bounceInUp " data-wow-duration="1" >
                            {
                                cart.length > 0 ?  cart.map((item , i)=><OrderItem key={i} removeItem={removeItem} increament={increament}  decreament={decreament} cart={item}/>) : null
                            }
                        </Grid>
                        <Grid className={classes.total}>
                            <Grid className={classes.totalText}>
                        <Typography variant="body2" gutterBottom>مجموع قیمت  {cart.length} کالا</Typography>
                                <Typography className="lighblue" display="block" gutterBottom>{AddCama(payment)} تومان</Typography>
                            </Grid>
                            <Grid className="text-center">
                                <Button className={classes.totalBtn}>ثبت نهایی این سفارش</Button>
                            </Grid>
                        </Grid>
                   
                    </>
                )  :
                (
                    <Grid className="text-center">
                                           <Typography className="font-yekan"  variant="body2" gutterBottom>موردی موجود نیست</Typography>
                     </Grid>
                )  
        }

           
           
              
        </Grid>
    )
}

export default Orders;
