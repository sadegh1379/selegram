import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Link } from 'react-router-dom';
import  MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import {useContext} from 'react';
import {context} from '../../context';
import Carousel from 'react-material-ui-carousel';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import TextField from '@material-ui/core/TextField';






const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        //   margin: theme.spacing(3),
          width: '100%',
        },
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
        
      },
    topnav:{
        backgroundColor:'#FCFCFC',
        padding:'10px 5px',
        display:'flex',
        height:'64px',
        justifyContent:'space-between',
        alignItems:'center',
        color:'#212121',
        lineHeight:'10px'
    },
    navText:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
       
    },
    informationGrid:{
        display:'flex',
        justifyContent:'space-between',
        padding:'8px',
        alignItems:'center'
    },
    informationText :{
        lineHeight:'30px',
        width:'100%',
        margin:'0 10px',
        padding:'0px'
    },
    iconsBody:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    liked:{
        
        display:'felx'
        ,alignItems:'center',
        padding:'5px',
        // marginTop:'-10px',
        opacity:'0.5'
    },
    goldstar:{
        color:'gold',
             
    },
    
    selectColor:{
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FFF"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FFF"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FFF"
          },
          "& .MuiOutlinedInput-input": {
            color: "#009FFF"
          },
          "&:hover .MuiOutlinedInput-input": {
            color: "#009FFF"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#009FFF"
          },
          "& .MuiInputLabel-outlined": {
            color: "#009FFF"
          },
          "&:hover .MuiInputLabel-outlined": {
            color: "#009FFF"
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: "purple"
          },
        
          
    },
    selectCount:{
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FFF"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FFF"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FFF"
          },
          "& .MuiOutlinedInput-input": {
            color: "#009FFF"
          },
          "&:hover .MuiOutlinedInput-input": {
            color: "#009FFF"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#009FFF"
          },
          "& .MuiInputLabel-outlined": {
            color: "#009FFF"
          },
          "&:hover .MuiInputLabel-outlined": {
            color: "#009FFF"
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: "purple"
          },
    
    },
    formGrid:{
        margin:'auto 10px'
    }
}))

function Item(props)
{
    return (
        <Grid >
            <img style={{width:'100%'}} src={props.item.img} alt="img"/>
        </Grid>
    )
}

function DetailPage() {
    const classes = useStyles();
    const data = useContext(context);
    console.log(data);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [color, setColor] = React.useState('');
    const [count, setCount] = React.useState('');

  


    // fordropdown---------

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      //-------------------

    return (
        <Grid style={{marginBottom:'100px'}}>
            {/* top navigation */}
            <Grid  className={classes.topnav}>
                <Grid item  md={5} sm={5} xs={5}>
                    <Link to="/">
                        <IconButton>
                            <ChevronRightIcon fontSize="large"/>
                        </IconButton>
                    </Link>
                </Grid>
                <Grid className={classes.navText}  item md={7} sm={7} xs={7}>
                        <p className="font-yekan" style={{ fontSize:'16px' , fontWeight:'bolder'}}>لوازم خانگی ایگِلس</p>
                        <small style={{color:'#616161'}} className="font-yekan" >تهران , شهریار</small>
                </Grid>
            </Grid>

            {/* information */}
   
            <Grid className={classes.informationGrid}>
                            <hr/>
                                
                                <Grid item  className={classes.informationText}>
                                    <span style={{fontSize:'12px'}}>  <span className="font-yekan">یخچال و فریزر دوقلوی سامسونگ مدل</span>  RR30PN-RZ30PN</span><br/>
                                    <span className="font-yekan font-10-px" style={{opacity:'0.5' , color:'#616161'}}>برند  :  <span className="lighblue">سامسونگ</span></span>
                                    <span className="font-yekan font-10-px" style={{opacity:'0.5', marginRight:'40px' , color:'#616161'}}>دسته بندی  : <span className="lighblue">یخچال و فریزر</span></span>
                                </Grid>
                                <Grid item>
                                    <div>
                                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                            <MoreHorizOutlinedIcon/>
                                        </Button>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </Menu>
                                    </div>
                                </Grid>
            </Grid>
            <hr style={{color:'black'}}/>
            {/* body */}
            <Grid>
                <Grid className={classes.iconsBody}>
                        <div>
                            <IconButton>
                                <StarBorderOutlinedIcon/>
                            </IconButton>
                            <IconButton>
                                <TimelineOutlinedIcon/>
                            </IconButton>
                            <IconButton>
                                <ShareOutlinedIcon/>
                            </IconButton>
                            <IconButton>
                                <FlagOutlinedIcon/>
                            </IconButton>
                        
                        </div>
                        <div>
                            <IconButton>
                                <BookmarkBorderOutlinedIcon/>
                            </IconButton>
                        </div>
                </Grid>
                <Grid>
                <Carousel autoPlay={false}>
                    {
                        data.kala[0].images.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Carousel>
                </Grid>
                <Grid className={classes.liked}>
                                <IconButton> <FavoriteBorderOutlinedIcon/></IconButton>
                                <span>23 بار پسنده شده</span>
                                <span style={{borderLeft:'1px solid black' , margin:'0 5px'}}></span>
                                <span className="lighblue lightblue">نظر 28</span>
                                <span style={{borderLeft:'1px solid black' , margin:'0 5px'}}></span>
                                <IconButton><StarBorderIcon className={classes.goldstar}/></IconButton>
                                <span>4.5 (12)</span>
                                
                    </Grid>
                    <span style={{paddingRight:'10px'}} className="font-10-px opacity font-yekan ">گارانتی:</span><p style={{paddingRight:'10px'}} className="font-12-px opacity">36ماهه سام سرویس</p>

            </Grid>
            
            {/* form select count and color */}
            <Grid className={classes.formGrid}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid item sm={8} md={8} xs={8}>
                    <TextField
                    
                    className={classes.selectColor}
                    id="filled-select-currency"
                    select
                    label="رنگ"
                    variant="outlined"
                    value={color}
                    onChange={(e)=>setColor(e.target.value)}
                    >
                
                        <MenuItem value="white">سفید</MenuItem>
                        <MenuItem value="blue">آبی</MenuItem>
                        <MenuItem value="grey">توسی</MenuItem>
                        <MenuItem value="red">قرمز</MenuItem>
                
                    </TextField>
                    </Grid>
                    <Grid item sm={3} md={3} xs={3}>
                    <TextField
                     
                     className={classes.selectCount}
                     id="filled-select-currency"
                     select
                     label="تعداد"
                     variant="outlined"
                     value={count}
                     onChange={(e)=>setCount(e.target.value)}
                     >
                 
                         <MenuItem value="1">1</MenuItem>
                         <MenuItem value="2">2</MenuItem>
                         <MenuItem value="3">3</MenuItem>
                         <MenuItem value="4">4</MenuItem>
                 
                     </TextField>
                    </Grid>
                   
                   
                </form>
            </Grid>
   
    </Grid>
    )
}

export default DetailPage
