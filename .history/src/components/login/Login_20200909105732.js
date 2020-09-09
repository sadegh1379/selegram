import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from './img/logo.png'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent:'center'
    textAlign:'center'
  },
 
  form: {
    width: '100%', // Fix IE 11 issue.
    margin:'50px'
  
  },
  
  textInput:{
    width:'280px',
    margin:'auto',
    marginTop:'50px',
    backgroundColor :'#ECEFF1',
    
    padding:'5px'
  
},
btn:{
  width:'280px',
  marginTop:'50px'
}
}));

export default function Login(props) {
  const classes = useStyles();
  const [text , setText] = React.useState('');
  
    

    const submitText = (e)=>{
        e.preventDefault();
        props.history.push("/login-3")
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       
          <img src={logo} alt="logo"/>
       
        
        <form onSubmit={submitText} className={classes.form} noValidate>
          <TextField
            className={classes.textInput}
            margin="normal"
            required
            fullWidth
            label="شماره موبایل یا ایمیل"
           value={text}
           onChange={(e)=>setText(e.target.value)}
          />
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            ورود
          </Button>
         
        </form>
      </div>
      
    </Container>
  );
}