import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import RotateRightIcon from '@material-ui/icons/RotateRight';
import {Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


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
    selegram:{
        fontSize:'24px',
        color:'#404D66',
        opacity:'100%'
    },
    selegram2:{
        marginTop:'14px',
        fontSize:'16px',
        opacity:'30%',
        lineHeight:'24px',
        margin:'20px',
        marginLeft:'0'
    }
  }));

function LoginThree(props) {
    const classes = useStyles();
    const [text , setText] = React.useState('');
   
    

    const submitText = (e)=>{
        e.preventDefault();
        props.history.push("/login-4")
    }
  
    return (
        <>
        <div className="back">
            <Link to="/">
                <Button variant="outlined" color="primary" className={classes.backBtn}>
                    <ChevronRightIcon/>
                </Button>
            </Link>
        </div>    
        <div style={{textAlign:'right' , paddingRight:'60px' , marginTop:'49px' }} className="logo" >
                <Typography className={classes.selegram}>
                      به سِلِگرام خوش آمدید!
                </Typography>
                <Typography className={classes.selegram2} >
                    برای تکمیل پروفایل خود، لطفاً نام و نام خانوادگی خود را به فارسی وارد کنید.
                </Typography>
         </div>
        <div className={classes.grid} style={{display:'flex' , flexDirection:'column'   , alignItems:'center' , paddingTop:'50px' }} >

     
        <div>
            <form onSubmit={(e)=>submitText(e)}  className={classes.root} noValidate autoComplete="off">
                <TextField value={text} onChange={(e)=>setText(e.target.value)} className={classes.textInput}   id="filled-basic" label="نام و نام خانوادگی"  />
              
                <Button type="submit" className={classes.textbtn}  variant="contained" color="primary">
                    ورود
                </Button>
            </form>
        </div>  
        </div>
        
</>
    )
}

export default LoginThree;
