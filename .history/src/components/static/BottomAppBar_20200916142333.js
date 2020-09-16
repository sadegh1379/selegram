import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import SearchIcon from '@material-ui/icons/Search';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeIcon from '@material-ui/icons/Home';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import AddBoxIcon from '@material-ui/icons/AddBox';
import clsx from 'clsx';
import {Link } from 'react-router-dom';
import img from './img/kala.png'

const useStyles = makeStyles((theme) => ({
  
  appBar: {
    top: 'auto',
    bottom: 0,
    height:'48px',
  },
  grow: {
    flexGrow: 1,
  },
  
  toolBar:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    
    
  },
  icons:{
    color:'black',
    fontSize:'25px',
    fontWeight:'small',
   
  },
  border:{
    border:'2px solid #009FFF',
  }
}));

export default function BottomAppBar(props) {
  const [ active , setActive] = useState({
    home : false,
    star : false,
    search : false,
    add : false,
    img:false
  });
  

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
           
              <IconButton onClick={()=>setActive({home:true , img:false , add:false , search:false , star:false})} edge="start" color="inherit" aria-label="open drawer">
                  <Link to="/">
                      {
                        active.home? <HomeIcon  className={clsx(classes.icons , "lighblue")}/> : <HomeOutlinedIcon  className={classes.icons} />
                      }
                   </Link>
              </IconButton>
          
              <IconButton  onClick={()=>setActive({home:false , img:false , add:false , search:false , star:true})} edge="end" color="inherit">
                  <Link to="/">
                      {
                        active.star? <StarHalfIcon  className={clsx(classes.icons , "lighblue")}/> : <StarBorderOutlinedIcon className={classes.icons}/>
                      }
                 </Link>
             </IconButton>
           
            <IconButton  onClick={()=>setActive({home:false, img:false ,  add:true , search:false , star:false})} edge="end" color="inherit">
                  <Link to="/add">
                      {
                        active.add? <AddBoxIcon  className={clsx(classes.icons , "lighblue")}/> : <AddBoxOutlinedIcon className={classes.icons}/>
                      }
                 </Link>
            </IconButton>
           
            <IconButton  onClick={()=>setActive({home:false , add:false , img:false , search:true , star:false})} edge="end" color="inherit">
                  <Link to="/search">
                      {
                        active.search? <SearchIcon  className={clsx(classes.icons , "lighblue")}/> : <SearchIcon className={classes.icons}/>
                      }
                  </Link>
            </IconButton>
    
            <IconButton  onClick={()=>setActive({home:false , img:true , add:false , search:false , star:false})} edge="start" color="inherit" aria-label="open drawer">
                  <Link to="/">
                      <img className={clsx(active.img?classes.border:null)}  style={{width:'14.6px'}} src={img} alt="img"/>
                  </Link>
            </IconButton>
          
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
