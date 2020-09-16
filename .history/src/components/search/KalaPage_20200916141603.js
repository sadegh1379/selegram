import { Button, FormControlLabel, Grid, makeStyles, MenuItem, Switch, TextField, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import RangeSlider from '../static/RangeSlider'; 
import clsx from 'clsx';
import SearchBtn from './SearchBtn'


const useStyles = makeStyles(()=>({
    formsGrid:{
        width:'100%'
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
    rageGrid:{
        marginTop:'20px'
    },
    buttonsGrid:{
      marginTop:'20px',
    },
    buttons:{
      fontFamily:'BYekan',
      color:'#009FFF',
      backgroundColor:'#E1F5FE',
      padding:'10px',
      borderRadius:'30px',
      margin:'4px',
      fontSize:'12px',
      
      '&:focus , &:active':{
        backgroundColor:'#009FFF',
        color:'#FFFFFF',
      }
    },

    buttonsActiove:{
      backgroundColor:'#009FFF',
      color:'#FFFFFF',
    },


    leasingGrid:{
      marginTop:'34px',
      borderBottom:'3px dashed  lightgrey',
    },
    leasingBtn:{
      fontFamily:'BYekan',
      fontSize:'12px',
      backgroundColor:'#FFFFFF',
      boxShadow:'1px 1px 20px lightgrey',
      width:'64px',
      height:'64px',
      margin:'10px',
      marginBottom:'25px',
      borderRadius:'10px',
      '&:focus':{
        border:'2px solid #009FFF',
      }

    },

    leasingBtnActive:{
      border:'2px solid #009FFF',
    },
    grantiGrid:{    
      marginTop:'20px',
      borderBottom:'3px dashed  lightgrey',
    },
    cityGrid:{
      marginTop:'25px',
    }

}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 60,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(30px)',
      color: '#009FFF',
      '& + $track': {
        backgroundColor: '#E1F5FE',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#009FFF',
      border: '6px solid #009FFF',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid #009FFF`,
    backgroundColor: '#E1F5FE',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});



function KalaPage() {
    const classes= useStyles();
    const [brand, setBrand] = React.useState('');
    const [group, setGroup] = React.useState('');
    const [grantiName, setGrantiName] = React.useState('1');
    const [postkala, setPostKala] = React.useState('1');
    const [timeKala, setTimeKala] = React.useState('1');
   
    return (
    <>
       <div  className="wow fideIn " data-wow-duration="0.7s">

            {/* two forms */}
            <Grid className={classes.formsGrid} >
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

            {/* range slide */}
            <Grid className={classes.rageGrid}>
                    <RangeSlider/>
            </Grid>
       
            {/* buttons */}
            <Grid className={classes.buttonsGrid}>
                <Button size="large" className={clsx(classes.buttons , classes.buttonsActiove)}>
                    جدید ترین
                </Button>
                <Button size="large" className={classes.buttons}>
                    ارزان ترین
                </Button>
                <Button size="large" className={classes.buttons}>
                    گران ترین
                </Button>
                <Button size="large" className={classes.buttons}>
                    محبوب ترین
                </Button>
                <Button size="large" className={classes.buttons}>
                    پر فروش ترین
                </Button>
            </Grid>

              {/* leasing  */}
              <Grid className={classes.leasingGrid}>
                <Typography className="font-yekan opacity-5 font-10-px" variant="caption" display="block" gutterBottom> این کالا فروش اقساطی دارد ؟</Typography>
                <Button  size="large" className={clsx(classes.leasingBtn , classes.leasingBtnActive)}>
                    فقط نقدی
                </Button>
                <Button size="large" className={classes.leasingBtn}>
                   نقد و اقساطی
                </Button>
              </Grid>

            {/* granti */}
            <Grid className={classes.grantiGrid}>

                {/* granti btn */}
                <Grid >
                    <Typography className="font-yekan opacity-5 font-10-px" variant="caption" display="block" gutterBottom> نوع گارانتی : </Typography>
                    <Button  size="large" className={clsx(classes.leasingBtn , classes.leasingBtnActive)}>
                        هردو
                    </Button>
                    <Button size="large" className={classes.leasingBtn}>
                      گارانتی اصلی 
                    </Button>
                    <Button size="large" className={classes.leasingBtn}>
                      گارانتی فرعی
                    </Button>
                  </Grid>
            
                {/* granti name */}
                <Grid>
                  <TextField
                      size="small"
                      className={classes.topinput}
                      id="filled-select-currency"
                      select
                      label="نام گارانتی"
                      variant="outlined"
                      value={grantiName}
                      onChange={(e)=>setGrantiName(e.target.value)}
                      >
                  
                          <MenuItem value="1" className="font-yekan ">سام سرویس</MenuItem>
                          <MenuItem value="2" className="font-yekan">سام سرویس</MenuItem>
                          <MenuItem value="3" className="font-yekan">سام سرویس</MenuItem>
                          <MenuItem value="4" className="font-yekan">سام سرویس </MenuItem>
                  
                      </TextField>
                </Grid>

                {/* post */}
                <Grid className="d-flex flex-between mb-25">
                  <Grid item md={5} sm={5} xs={5}>
                      <TextField
                          size="small"
                          className={classes.topinput}
                          id="filled-select-currency"
                          select
                          label="نحوه ی تحویل کالا"
                          variant="outlined"
                          value={postkala}
                          onChange={(e)=>setPostKala(e.target.value)}
                          >
                      
                              <MenuItem value="1" className="font-yekan ">درب کارخانه / فروشگاه</MenuItem>
                              <MenuItem value="2" className="font-yekan">درب کارخانه / فروشگاه</MenuItem>
                              <MenuItem value="3" className="font-yekan">درب کارخانه / فروشگاه</MenuItem>
                              <MenuItem value="4" className="font-yekan">درب کارخانه / فروشگاه</MenuItem>
                      
                          </TextField>
                  </Grid>
                  <Grid item md={5} sm={5} xs={5}>
                    <TextField
                        size="small"
                        className={classes.topinput}
                        id="filled-select-currency"
                        select
                        label="زمان تحویل کالا"
                        variant="outlined"
                        value={timeKala}
                        onChange={(e)=>setTimeKala(e.target.value)}
                        >
                    
                            <MenuItem value="1" className="font-yekan ">3 روز کاری</MenuItem>
                            <MenuItem value="2" className="font-yekan">5 روز کاری</MenuItem>
                            <MenuItem value="3" className="font-yekan">8 روز کاری</MenuItem>
                            <MenuItem value="4" className="font-yekan">10 روز کاری </MenuItem>
                    
                        </TextField>
                  </Grid>
                </Grid>
            
            </Grid>
           
            {/* city state */}
            <Grid className={classes.cityGrid}>
              <Grid className="d-flex flex-between flex-items-center">
                  <Typography className="font-yekan  font-10-px" variant="overline" display="block" gutterBottom>فقط مناطق اطراف  من</Typography>
                  <FormControlLabel
                    control={<IOSSwitch  name="checkedB" />}
                    
                  />
              </Grid>
              <Grid className="d-flex flex-between mb-100 mt-15">
                  <Grid item md={5} sm={5} xs={5}>
                      <TextField
                          size="small"
                          className={classes.topinput}
                          id="filled-select-currency"
                          select
                          label="شهرستان"
                          variant="outlined"
                          value={postkala}
                          onChange={(e)=>setPostKala(e.target.value)}
                          >
                      
                              <MenuItem value="1" className="font-yekan ">انتخاب شهرستان</MenuItem>
                              <MenuItem value="2" className="font-yekan">انتخاب شهرستان</MenuItem>
                              <MenuItem value="3" className="font-yekan">انتخاب شهرستان</MenuItem>
                              <MenuItem value="4" className="font-yekan">انتخاب شهرستان</MenuItem>
                      
                          </TextField>
                  </Grid>
                  <Grid item md={5} sm={5} xs={5}>
                    <TextField
                        size="small"
                        className={classes.topinput}
                        id="filled-select-currency"
                        select
                        label="استان"
                        variant="outlined"
                        value={timeKala}
                        onChange={(e)=>setTimeKala(e.target.value)}
                        >
                    
                            <MenuItem value="1" className="font-yekan ">انتخاب استان</MenuItem>
                            <MenuItem value="2" className="font-yekan">انتخاب استان</MenuItem>
                            <MenuItem value="3" className="font-yekan">انتخاب استان</MenuItem>
                            <MenuItem value="4" className="font-yekan">انتخاب استان </MenuItem>
                    
                        </TextField>
                  </Grid>
                </Grid>
            
            </Grid>
       
             
       </div>
       <div>
              {/* seach button */}
              <SearchBtn/>     
       </div>
 </>
    )
}

export default KalaPage;
