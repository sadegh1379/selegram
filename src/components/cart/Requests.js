import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React , {useContext } from 'react';
import {context} from '../../context';
import RequestItem from './RequestItem';

const useStyles = makeStyles(()=>({
    historyBtn:{
        color:'#009FFF',
        
        fontFamily:'BYekan',
        textAlign:'center',
        margin:'10px 5px' ,
        width:'300px',
        border:'1px solid #009FFF',
        '&:focus , &:active ':{
            color:'#009FFF',
            
            fontFamily:'BYekan',
        }
    },
    reqText:{
        paddingTop:'10px'
    }
}))


function Requests() {
    const data = useContext(context);
    const classes = useStyles();
    const {cart} = data;
    console.log(cart);

    

    return (
        <Grid style={{ marginBottom:'100px'}}>
            {/* top btn */}
                    <Grid className="text-center">
                            <Button variant="outlined" className={classes.historyBtn}>سوابق درخواست ها</Button>
                     </Grid>
                     <Typography className={classes.reqText} variant="caption" display="block" gutterBottom>3 درخواست تأیید نشده دارید...</Typography>

                    {/* items */}
                        <Grid >
                            {
                                [1,2,3].map((item , i)=><RequestItem key={i} />)
                            }
                        </Grid>

        </Grid>
                        
            
        
    )
}

export default Requests;
