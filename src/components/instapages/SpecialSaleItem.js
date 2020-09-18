import {  Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import ice from './img/ice.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(()=>({
    root:{
        borderBottom:'1px solid lightgrey',
    },
    top:{
        display:'flex',
        padding:'10px',

    },
    topText:{
        width:'100%',
        padding:'10px',
        
    },
    badge:{
        backgroundColor:'#FA3D3D',
        fontSize:'14px',
        padding:'3px 8px',
        borderRadius:'20px',
        color:'#FFFFFF',
        fontWeight:'bold',

    },
    bottomGrid:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:'20px',
    },
    timeEnd:{
        color:'#FA3D3D',
        fontSize:'10px',
        fontFamily:'BYekan',
    },
    time:{
        opacity:'80%',
        color:'#000A12',
        fontWeight:'bolder',
        fontSize:'22px',

    },
    addButton:{
        backgroundColor:'#009FFF',
        color:'#FFFFFF',
        fontSize:'16px',
        boxShadow:'5px 5px 5px 5px',
        '&:focus':{
            backgroundColor:'#009FFF',
            color:'#FFFFFF',
        }
    }
}))

function SpecialSaleItem() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>

            {/* top grid */}
            <Grid className={classes.top}>
                <Grid item md={4} sm={4} xs={4}>
                    <img style={{width:'100%'}} src={ice} alt="loading"/>
                </Grid>
                <Grid className={classes.topText} item md={8} sm={8} xs={8}>
                        <Typography className="font-12-px font-yekan" gutterBottom>
                                یخچال دوقلوی سامسونگ مدل - HPA_343
                        </Typography>
                        <Typography variant="caption" className="font-12-px opacity-5 font-yekan" gutterBottom>
                                گارانتی : 36ماهه سام سرویس
                        </Typography>

                    <Grid className="d-flex flex-between flex-items-center">
                        <Typography variant="caption" className="font-12-px opacity-5 line-through" gutterBottom>
                                21.210.000
                        </Typography>
                        <Typography>
                            <span className={classes.badge} >
                                2%
                            </span>
                        </Typography>
                        <Typography className="money-color">
                            20.500.000
                        </Typography>

                    </Grid>
                </Grid>
            </Grid>
           
           {/* bottom grid */}
           <Grid className={classes.bottomGrid}>
               <Grid>
                   <Typography className={classes.timeEnd}>
                      تا پایان اعتبار : 
                   </Typography>
               </Grid>
               <Grid>
                    <Typography className={classes.time}>
                        23 : 18 : 12
                   </Typography>
               </Grid>
               <Grid>
                    <Button
                            variant="contained"
                            color={""}
                            size="large"
                            className={classes.addButton}
                            endIcon={<ArrowBackIosIcon />}
                             >
                            ثبت سفارش
                    </Button>
               </Grid>
           </Grid>
           
        </Grid>
    )
}

export default SpecialSaleItem
