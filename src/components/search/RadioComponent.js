import { Badge, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import KalaPage from './KalaPage';
import ShoppingPage from './ShoppingPage';
import ServicePage from './ServicePage';
import clsx from 'clsx'

const useStyles = makeStyles(()=>({
    root:{
        padding:'20px 20px',
        backgroundColor:'#FAFAFA'
    },
    radioGroup : {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        margin:'20px auto',
        width:'100%',
    },
    color:{
        color:'black ',
        fontSize:'12px'
    }
}))

function RadioComponent() {
    const classes = useStyles();

    const [value, setValue] = React.useState();

    let page ;
    switch (value) {
        case 'kala':
            page = <KalaPage/>
        break;
        case 'service':
            page = <ServicePage/>
        break;
        case 'shopping':
            page = <ShoppingPage/>
        break;
    
        default:
        break;
    }

  
    return (
        <Grid className={classes.root}>
            
            {/* radio */}
            <Grid className={clsx(classes.radioGroup ,"wow bounceInLeft ")}  data-wow-duration="0.7s" >
                <Grid className="d-flex flex-items-center"> 
                    <input   onChange={(e)=>setValue(e.target.value)} type="radio" id="kala" name="select" value="kala"/>
                    <label className={classes.color} htmlFor="kala">کالا</label><br/></Grid>
                <Grid className="d-flex flex-items-center">
                    <input onChange={(e)=>setValue(e.target.value)} type="radio" id="shopping" name="select" value="shopping"/>
                    <label className={classes.color} htmlFor="shopping">فروشگاه</label><br/></Grid>
                <Grid className="d-flex flex-items-center">
                        
                    <input onChange={(e)=>setValue(e.target.value)} className={classes.color} type="radio" id="service" name="select" value="service"/>
                    <label className={classes.color} htmlFor="service">سرویس کار</label></Grid>
                    <Badge style={{color:'darkred'}}  badgeContent="(جدید)"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}
                        >
                        
                     </Badge>
                </Grid>

            {/* pager components */}
            
                {
                    page
                }
            
        </Grid>
    )
}

export default RadioComponent
