import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from './img/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      display:'flex',
      flexDirection:'column',
      width:'100%',
      marginTop:'100px'
      
    },
  },
  grid:{
    //   backgroundColor:'grey'
    backgroundColor:'#FFFFFF'
      

  },
  textInput:{
      width:'280px',
      height:'40px',
      backgroundColor :'#ECEFF1',
        
      padding:'8px'
    
  },
  textbtn:{
      marginTop:'48px',
      fontSize:'14px'
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const [text , setText] = useState('')

  const submitText = (e)=>{
    e.preventDefault();
    console.log(text);
    
  }

  return (
      <div className={classes.grid} style={{display:'flex' , flexDirection:'column'   , alignItems:'center' , paddingTop:'150px'}} >
                <div className="logo" >
                                    <img src={logo} alt="selegram"/>
                </div>
                <div >
                    <form onSubmit={(e)=>submitText(e)}  className={classes.root} noValidate autoComplete="off">
                        <TextField value={text} onChange={(e)=>setText(e.target.value)} className={classes.textInput}   id="filled-basic" label="شماره موبایل یا ایمیل"  />
                      
                        <Button type="submit" className={classes.textbtn}  variant="contained" color="primary">
                            ادامه
                        </Button>
                    </form>
                </div>
                
                
      </div>
    
  );
}
