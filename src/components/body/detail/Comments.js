import React from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    commentItem:{
        margin:'13px',
    }
})



function Comments({item}) {
    const {name , date , text , level} = item;
    
    
    const classes = useStyles()
    return (
       <Grid className={classes.commentItem}>
           <p className="font-12-px bold">{name}</p>
           <p className="font-10-px opacity-5">{date}</p>
           <p className="font-10-px ">{text}</p>
            <p className="font-10-px opacity-5">امتیاز ثبت کرده اند  <span>
                <IconButton>
                    <Rating name="size-small" defaultValue={level} max={6} size="small" readOnly />
                </IconButton>
            </span></p>
            <hr className="opacity-5"/>
       </Grid>
    )
}

export default Comments

