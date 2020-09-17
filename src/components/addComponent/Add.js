import React from 'react'
import { Button, Grid, IconButton, makeStyles, MenuItem, Tab, Tabs, TextField } from '@material-ui/core';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles(()=>({

    root:{
        marginTop:'40px',
        margin:'20px',
    },
    navbar:{
        fontFamily:'BYekan',
        display:'flex',
        justifyContent:'space-between',
        padding:'15px',
        backgroundColor:'#FAFAFA',
        alignItems:'center',
        height:'30px',

    },
    red:{
        color:'#FA3D3D',
    },
    blue:{
        color:'#009FFF',
    },
    tabsGrid:{
        marginTop:'33px',
        backgroundColor:'#FAFAFA',
        borderRadius:'20px',
        padding:'5px',
        
    },
    tab:{
        backgroundColor:'#FAFAFA',
        fontFamily:'BYekan',
        borderRadius:'20px',
        width:'109px',
        fontSize:'12px',
        height:'30px',
        color:'grey',
        boxShadow:'0px 3px 6px #0000001A',
        transitionProperty:'all',
        transitionDuration:'0.8s',
        msTransitionTimingFunction:'linear',
        padding:'2px',
        
        '&:focus':{
            backgroundColor:'#009FFF',
            color:'#FFFFFF',
            boxShadow:'0px 3px 6px #0000001A',
        }

    },
    activeTap:{
        backgroundColor:'#009FFF',
        color:'#FFFFFF',
        boxShadow:'0px 3px 6px #0000001A',
    },
    tabsGridMain:{
        height:'40px',
        width:'240px',
        margin:'0 auto',

    },
    topinput:{
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FFF"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FFF"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FFF"
          },
          "& .MuiOutlinedInput-input": {
            fontFamily:'BYekan',
            color: "black"
          },
          "&:hover .MuiOutlinedInput-input": {
            color: "#009FFF"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "black"
          },
          "& .MuiInputLabel-outlined": {
            color: "#009FFF"
          },
          "&:hover .MuiInputLabel-outlined": {
            color: "#009FFF"
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#009FFF"
          },
      fontFamily:'BYekan',
      width:'100%',
      margin:'10px 5px'
    },
    addKalaBtn:{
        color:'#009FFF',
        
        fontFamily:'BYekan',
        textAlign:'center',
        margin:'10px 5px' ,
        width:'300px',
        border:'1px solid #009FFF',
        '&:focus , &:active ':{
            color:'#009FFF',
            
            fontFamily:'BYekan',
        }
    },
  
}))


function Add() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const [brand , setBrand] = React.useState('')
    const [group , setGroup] = React.useState('')


    const handleChange = (event, newValue) => {
        setValue(newValue);
        
    };

    
    
    return (
        <div className="wow bounceInDown " data-wow-duration="0.7s">
            {/* top navigation */}
            <Grid className={classes.navbar}>
                    <Grid>
                        <Link to="/">
                            <IconButton>
                                <HighlightOffSharpIcon fontSize="large" className={classes.red}/>
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid>ثبت کالای جدید ... </Grid>
                    <Grid>
                        <IconButton>
                            <InfoOutlinedIcon fontSize="large" className={classes.blue}/>
                        </IconButton>
                    </Grid>
                </Grid>

            {/* tabs */}
            <Grid className={classes.tabsGridMain}>
                    
                        <Tabs
                           className={classes.tabsGrid}
                            value={value}
                            indicatorColor={""}
                            textColor="primary"
                            onChange={handleChange}
                            centered
                            
                        >
                            <Tab  className={clsx(classes.tab )} label="گروه محصولات" />
                            <Tab className={classes.tab} label="تک محصول" />
                        </Tabs>
                    
                </Grid>
            
            <Grid className={classes.root}>
                {value === 0 ?
                (
                    //  {/* forms */}
                    <Grid>
                <TextField
                    size="small"                    
                    className={classes.topinput}
                    id="filled-select-currency"
                    select
                    label="برند"
                    variant="outlined"
                    value={brand}
                    onChange={(e)=>setBrand(e.target.value)}
                    >
                
                        <MenuItem value="1" className="font-yekan ">سامسونگ</MenuItem>
                        <MenuItem value="2" className="font-yekan">ال جی </MenuItem>
                        <MenuItem value="3" className="font-yekan">هواوی</MenuItem>
                        <MenuItem value="4" className="font-yekan">نوکیا </MenuItem>
                
                    </TextField>
                    <TextField
                    size="small"
                    className={classes.topinput}
                    id="filled-select-currency"
                    select
                    label="دسته بندی"
                    variant="outlined"
                    value={group}
                    onChange={(e)=>setGroup(e.target.value)}
                    >
                
                        <MenuItem value="1" className="font-yekan ">یخچال فریزر</MenuItem>
                        <MenuItem value="2" className="font-yekan">لوازم برقی </MenuItem>
                        <MenuItem value="3" className="font-yekan">لوازم اشپزخانه</MenuItem>
                        <MenuItem value="4" className="font-yekan">غیره</MenuItem>
                
                    </TextField>
                </Grid>
                ) : 
                (
                    <Grid className="text-center">
                            <Button variant="outlined" className={classes.addKalaBtn}>ثبت کالا + </Button>
                     </Grid>
                )
                }
               
                

            </Grid>
        </div>
    )
}

export default Add
