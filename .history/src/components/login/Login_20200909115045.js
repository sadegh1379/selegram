import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from './img/logo.png';
import Alert from '@material-ui/lab/Alert';
import ErrorIcon from '@material-ui/icons/Error';


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
alert:{
      margin:'30px 30px',
      opacity:'80%',
      fontSize:'bold'
},
btn:{
  width:'280px',
  marginTop:'50px'
}
}));

export default function Login(props) {
  const classes = useStyles();
  const [text , setText] = React.useState('');
  const [err , setErr] = React.useState(false);
  
    

    const submitText = (e)=>{
      e.preventDefault();
      if(text === ''){
        setErr(true);
        setTimeout(()=>setErr(false) , 2000)
      }else{
        props.history.push({
          pathname:'/login-1',
          state:{
            phone : text
          }
        })
      }
       
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
            
            fullWidth
            label="شماره موبایل یا ایمیل"
           value={text}
           onChange={(e)=>setText(e.target.value)}
          />
          {err &&  <Alert icon={ <ErrorIcon/>} className={classes.alert} color="error" variant="outlined"> ایمیل یا شماره تلفن را وارد کنید </Alert> }
         
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            ادامه
          </Button>
         
        </form>
      </div>
      
    </Container>
  );
}