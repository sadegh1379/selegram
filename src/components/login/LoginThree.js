import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
        
        position:'absolute',
        bottom:'0',
        width:'100%'
    },
    form: {
        textAlign:'center'
      
      },
      btn:{
        width:'280px',
        marginTop:'50px'
      },
      alert:{
          width:'280px',
          textAlign:'center',
          margin:'0 auto',
        // opacity:'80%',
        fontSize:'bold'
  },
  }));

function LoginThree(props) {
    const classes = useStyles();
    
    const [text , setText] = React.useState('');
    const [err , setErr] = React.useState(false);

    // const [time , setTime] = React.useState(30)
    

    const submitText = (e)=>{
        e.preventDefault();
        if(text === ''){
          setErr(true);
          setTimeout(()=>setErr(false) , 2000)
        }else{
          props.history.push({
            pathname:'/',
            
          })
        }
         
      }
    
    
    // setInterval((e)=>{
         
    //     setTime(time -1)
           
    // } , 1000)
    

    
    

    return (
        <div className="wow bounceInLeft" data-wow-duration="1.5s" >
        <div className="back">
            <Link to="/login">
                <Button variant="outlined" color="primary" className={classes.backBtn}>
                    <ChevronRightIcon/>
                </Button>
            </Link>
        </div>    
        <div style={{textAlign:'right' , paddingRight:'60px' , marginTop:'49px' }}>
                    <p  style={{textAlign:'right' ,  fontWeight:'small'  , fontSize:'30px', color:'#404D66'}}>به سلگرام خوش آمدید!</p>
                    <p className="color-text" style={{fontSize:'16px'  ,fontWeight:'small', lineHeight:'30px' , paddingLeft:'20px' , opacity:'0.5'}}>برای تکمیل پروفایل خود لطفا نام  و نام خانوادگی  خود را به فارسی وارد کنید</p>
         </div>
        

     
        <div>
                <form onSubmit={submitText} className={classes.form} noValidate>
                <TextField
                    className={classes.textInput}
                    margin="normal"
                    error={err}
                    helperText={err ? "لطفا نام و نام خانوادگی را وارد کنید ." : false}
                    fullWidth
                    label="نام و نام خانوادگی"
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
       
</div>
    )
}

export default LoginThree;
