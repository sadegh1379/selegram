import React , {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField } from '@material-ui/core';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import clsx from 'clsx';


const useStyles = makeStyles(()=>({
    modalGrid:{
        backgroundColor:'#000A12CC',
    },
    input:{
        backgroundColor:'#E1F5FE',
        width:'100%',
        marginTop:'50px',
        fontFamily:'BYekan',
        color:'#034DA2',
       
    },
    btn:{
        backgroundColor:'#009FFF',
        color:'white',
        height:'48px',
        borderRadius:'0 0 20px 20px',
        fontSize:'20px',
        '&:focus':{
            backgroundColor:'#009FFF',
            color:'white',
        }
    },
    flagGrid:{
        backgroundColor:'#3ACC6C',
        padding:'10px',
        width:'84px',
        height:'84px',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },
    flagIcon:{
        color:'#FFFFFF',
        width:'33px',
        fontSize:'33px',
    }
}))

// });



const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    // width:'100%',
    height:'180px',
    
    
  },
}))(MuiDialogContent);

const DialogContentTwo = withStyles((theme) => ({
    root: {
      
      height:'180px',
      textAlign:'center',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      
    },
  }))(MuiDialogContent);



export default function ReportModal(props) {
    const [page , setPage] = useState('one')
  
    const classes = useStyles();


  const handleClose = () => {
    props.setReport(false);
  };

  if(page === 'one'){
    return (
        <div >
          <Dialog className={clsx(classes.modalGrid , "wow bounceInLeft ")}   onClose={handleClose}  open={props.report}
          fullWidth={true}
          maxWidth={'md'}
           data-wow-duration="1s"
          >
            <DialogContent >
                <Typography className="font-yekan font-16-px opacity-5"  display="block" gutterBottom>
                        ثبت گزارش خطای کاربر    
                </Typography>
               
                <TextField   className={classes.input} id="filled-basic" label="توضیح خود را وارد کنید" variant="standard" />
                <p className="font-yekan font-10-px" display="block" >
                این گزارش به فروشنده نشان داده نخواهد شد   
                </p>
             
            </DialogContent>
           
              <Button className={classes.btn} onClick={()=>setPage('two')} color="primary">
                ثبت گزارش خطا
              </Button>
            
          </Dialog>
        </div>
      );
  }else{
    return (
        <div >
          <Dialog className={classes.modalGrid}   onClose={handleClose}  open={props.report}
          fullWidth={true}
          maxWidth={'md'}
          
          >
            <DialogContentTwo 
            className="wow bounceInLeft"
            data-wow-duration="1s"
            >
                
                <Grid className={classes.flagGrid}>
                    <FlagOutlinedIcon className={classes.flagIcon}/>
                </Grid>
               <Grid >
                    <p className="font-yekan font-14" display="block" >
                            گزارش خطای شما با موفقیت ثبت شد. نتیجه از طریق اطلاعیه ها نمایش داده خواهد شد.
                    </p>
               </Grid>
             
             
            </DialogContentTwo>
           
              <Button className={classes.btn} 
              onClick={()=>{ handleClose() ; setPage('one');}}
               color="primary"
               >
                متوجه شدم 
              </Button>
            
          </Dialog>
        </div>
      );
  }

 
}
