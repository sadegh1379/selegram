import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import Alert from '@material-ui/lab/Alert';
import ErrorIcon from '@material-ui/icons/Error';
import {Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        display:'flex',
        flexDirection:'column',
        width:'100%',
        
        
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
    },
    backBtn:{
        padding:'12px 8px',
        backgroundColor:'#ECEFF1',
        marginTop:'32px',
        marginLeft:'20px',
        width:'40px',
        color:'#034DA2',
        // backgroundColor:'grey'
    },
    footer:{
        opacity:'40%',
        fontSize:'12px',
        paddingLeft:'13px',
        position:'fixed',
        bottom:'0px',
        width:'100%',
    },
    // form: {
    //     width: '100%', // Fix IE 11 issue.
    //     margin:'50px'
      
    //   },
      btn:{
        width:'280px',
        marginTop:'50px'
      }
  }));

function LoginOne(props) {
    const classes = useStyles();
    const phone = props.location.state.phone;
    const [text , setText] = React.useState('');
    const [err , setErr] = React.useState(false);

    // const [time , setTime] = React.useState(30)
    

    const submitText = (e)=>{
        e.preventDefault();
        props.history.push("/login-3")
    }
    
    
    // setInterval((e)=>{
         
    //     setTime(time -1)
           
    // } , 1000)
    

    
    

    return (
        <>
        <div className="back">
            <Link to="/">
                <Button variant="outlined" color="primary" className={classes.backBtn}>
                    <ChevronRightIcon/>
                </Button>
            </Link>
        </div>    
        <div>
                    <p  style={{textAlign:'right' ,  fontWeight:'small' , fontFamily:'inherit ' , fontSize:'30px', color:'#404D66'}}>{phone}</p>
                    <p className="color-text" style={{fontSize:'16px' , opacity:'0.5'}}>لطفا کد دریافت شده را وارد کنید</p>
         </div>
        

     
        <div>
                <form onSubmit={submitText} className={classes.form} noValidate>
                <TextField
                    className={classes.textInput}
                    margin="normal"
                    required
                    fullWidth
                    label="کد تایید"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
                {err &&  <Alert icon={ <ErrorIcon/>} className={classes.alert} color="error"> ایمیل یا شماره تلفن را وارد کنید </Alert> }
                
                
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
            <p style={{textAlign:'center' ,display:'flex' , justifyContent:'center' , color:'#009FFF' , opacity:'30%'}}><RotateRightIcon/>ارسال مجدد کد تایید {"time"}</p>
         
            </div>
        <div className={classes.footer}>
                <hr style={{width:'100%'}}/>
                <p>مشکلی در ورود یا ثبت نام دارید ? با ما تماس بگیرید<span style={{marginRight:'50px'}}>021 6563-44-4525</span></p>
                
        </div>
</>
    )
}

export default LoginOne;
