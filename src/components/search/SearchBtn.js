import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  
  appBar: {
    top: 'auto',
    bottom: 0,
    height:'84px',
    backgroundColor:'#FFFFFF',
  },
  grow: {
    flexGrow: 1,
  },
  
  SearchBottomBtn:{
      margin:'auto 20px',
      backgroundColor:'#009FFF',
      height:'39px',
      fontSize:'16px',
      fontFamily:'BYekan',
      boxShadow:'0px 20px 20px #C2BDBD73',
      '&:focus':{
        backgroundColor:'#009FFF',
        boxShadow:'0px 20px 20px #C2BDBD73',
      }
  }
}));

export default function SearchBtn(props) {
  

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar position="fixed" color="default" className={classes.appBar}>
            <Button variant="contained" size="small" color="primary" className={classes.SearchBottomBtn}>
                        جستوجو
            </Button>
      </AppBar>
    </React.Fragment>
  );
}
