import { Grid, makeStyles, MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import RangeSlider from '../static/RangeSlider'; 

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
            color: "#009FFF"
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
    }

}))



function KalaPage() {
    const classes= useStyles();
    const [brand, setBrand] = React.useState('1');
    const [group, setGroup] = React.useState('1');
    const [err , serErr] = React.useState(false);
   
    return (
       <Grid>

            {/* two forms */}
            <Grid className={classes.formsGrid} >
                <TextField
                    error={err}
                    helperText={err ? "لطفا برند را وارد کنید" : false}
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
                    error={err}
                    helperText={err ? "لطفا دسته بندی را وارد کنید" : false}
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
       </Grid>
    )
}

export default KalaPage;
