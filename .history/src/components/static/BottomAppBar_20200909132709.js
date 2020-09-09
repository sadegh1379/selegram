import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import SearchIcon from '@material-ui/icons/Search';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const useStyles = makeStyles((theme) => ({
  
 
  
  
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  
  toolBar:{
    display:'flex',
    justifyContent:'space-between'
  }
}));

export default function BottomAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            {/* <MenuIcon /> */}
          </IconButton>
          
         
         
          <IconButton edge="end" color="inherit">
            <StarBorderOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <img style={{width:'14.6px'}} src={props.img} alt=""/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}