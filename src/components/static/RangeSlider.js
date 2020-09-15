import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Grid } from '@material-ui/core';
import AddCama from './AddCama';

const useStyles = makeStyles({
  root: {
    width: '100%',
    
  },
  headText:{
    marginBottom:'20px',
    opacity:'0.5',
    fontFamily:'BYekan',
  }
});



export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([5000000, 20000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.headText} id="range-slider" gutterBottom>
        بازه قیمت : 
      </Typography>
      <Grid className="d-flex font-yekan space-around">
            <Grid> از {AddCama( value[0])} تومان </Grid>
            <Grid>|</Grid>
            <Grid> تا {AddCama(value[1])} تومان </Grid>
      </Grid>
      <Slider
        max={50000000}
        min={0}
        value={value}
        onChange={handleChange}
        // valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        
      />
    </div>
  );
}
