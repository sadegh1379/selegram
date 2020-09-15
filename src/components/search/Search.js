import React , {useState} from 'react';
import { FilledInput, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, makeStyles } from '@material-ui/core';
import BottomAppBar from '../static/BottomAppBar';
import SearchIcon from '@material-ui/icons/Search';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import RadioComponent from './RadioComponent';

const useStyles = makeStyles(()=>({
    searchInput:{
        display:'flex',
        padding:'10px 13px',
        justifyContent:'space-between',
        backgroundColor:'#E3F2FD',
        
    },
    input:{
        width:'100%',
        backgroundColor:'#BBDEFB',
       
    },
    searchicon:{
        color:'#42A5F5',
    },
    searchLabel:{
        marginLeft:'20px',
    },
   
}))

function Search() {
    const classes = useStyles();
    const [show , setShow] = useState(true);
    return (
        <Grid>

            {/* search input */}
            <Grid className={classes.searchInput}>
                <Grid item md={2} sm={2} xs={2} >
                    <IconButton  onClick={()=>setShow(!show)}>
                        {
                            show ? <ExpandLessIcon  className={classes.searchicon} fontSize="large"/> :   <DragHandleIcon className={classes.searchicon} fontSize="large" />
                        }
                    </IconButton>
                </Grid>
                <Grid item md={10} sm={10} xs={10}>
                <FormControl className={classes.input}>
                    <InputLabel className={classes.searchLabel} htmlFor="standard-adornment-password">قسمتی از نام کالا را وارد کنید ...</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton className={classes.searchButton}>
                                    <SearchIcon fontSize="large" className={classes.searchicon}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                     </FormControl>
                </Grid>
            </Grid>


            {/* radio button */}
            {
                show?<RadioComponent/> : null
            }





            {/* bottom app bar */}
            {show?null : <BottomAppBar/>}
            

        </Grid>
    )
}

export default Search
