import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import React  from 'react';
import ColorCheck from '../static/ColorCheck';
import AddCama from '../static/AddCama';



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

function OrderItem({cart ,increament , decreament , removeItem}) {

   
    
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid className={classes.cartHead}>
                <p className="lighblue font-12-px">لوازم خانگی ایگلس</p>
                <p className=" font-10-px opacity-5 ml-5">{cart.granti}</p>
               
            </Grid>
            <Grid className={classes.cartGrid}>
                <Grid>
                    <img alt="cart" style={{width:'92px'}} src={cart.img} />
                </Grid>
                <Grid className="width-100 text-right">
                    <Typography className="font-yekan"  variant="body2" gutterBottom>{cart.name}</Typography>
                        
                    <ColorCheck color={cart.buy_color}/>
                        
                    <Typography className="lighblue" variant="subtitle2" gutterBottom>قیمت : {AddCama(cart.payment)}</Typography>
                </Grid>
                <Grid className={classes.buttonGroups}>
                    <Button onClick={()=>increament(cart.id)} ><AddBoxOutlinedIcon className="lighblue"/></Button>
                    <Button>{cart.count}</Button>

                    {cart.count === 1? <Button onClick={()=>removeItem(cart.id)}><DeleteForeverOutlinedIcon className="lighblue"/></Button> 
                    :
                    <Button onClick={()=>decreament(cart.id)}><IndeterminateCheckBoxOutlinedIcon className="lighblue"/></Button> 
                    }
                    
                </Grid>
            </Grid><hr/>
        </Grid>
    )
}

export default OrderItem
