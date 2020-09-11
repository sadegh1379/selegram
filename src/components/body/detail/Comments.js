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



function Comments() {
    const classes = useStyles()
    return (
       <Grid className={classes.commentItem}>
           <p className="font-12-px bold">مهدی آقایی</p>
           <p className="font-10-px opacity-5">اردیبهشت 1398 28</p>
           <p className="font-10-px opacity-8">این یخچال واقعا میشه گفت کیفیت و ظاهر خوبی داره و میشه چندین سال ازش استفاده کرد بدون این که خرابی چیزی براش پیش بیاد توصیه میکنم خریداری کنید</p>
            <p className="font-10-px opacity-5">امتیاز ثبت کرده اند  <span>
                <IconButton>
                    <Rating name="size-small" defaultValue={6} max={6} size="small" readOnly />
                </IconButton>
            </span></p>
            <hr className="opacity-5"/>
       </Grid>
    )
}

export default Comments

