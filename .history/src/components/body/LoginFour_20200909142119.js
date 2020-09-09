import React , {useContext} from 'react';
import Navbar from '../static/Navbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import {context} from '../../context';
import useStyles from './styles';
import StarIcon from '@material-ui/icons/Star';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import BottomAppBar from '../static/BottomAppBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TextField from '@material-ui/core/TextField';



function LoginFour() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const data = useContext(context);
    console.log(data);

    // fordropdown---------

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      //-------------------

    return (
        <React.Fragment>
            <Navbar/>
           
            <Grid className={classes.carouselContainer}>
                <ul className="no-scroll" style={{display:'flex' , overflow:'scroll' , listStyle:'none' }}>
                    <span className={classes.ulf}>
                        <StarIcon/>
                            فروش ویژه
                    </span>
                    {data.kala.map((item , i)=>{
                        return(
                            <li style={{margin:'0px 8px' }} key={i}>
                                <img style={{width:'64px' , height:'83px'}}  src={item.img} alt=""/>
                                
                                
                            </li>
                        )
                    })
                    }
                </ul>
            </Grid><hr/>

            {/* information component */}
 
            <Grid className={classes.informationGrid}>
                <Grid item ><img alt="img" style={{width:'40px'}} src={data.kala[2].img}/></Grid>
                <Grid item  className={classes.informationText}>
                    <span className="font-yekan font-12-px" style={{borderRight:'1px solid black' , paddingRight:'10px' }}>لوازم خانگی  ایگلس</span>
                    <span className="font-yekan  font-10-px" style={{marginRight:'15px' , opacity:'0.5'}}>تهران , شهریار</span><br/>
                    <span className="font-yekan font-10-px" style={{opacity:'0.5'}}>برند  :  <span className="lighblue">سامسونگ</span></span>
                    <span className="font-yekan font-10-px" style={{opacity:'0.5', marginRight:'40px'}}>دسته بندی  : <span className="lighblue">یخچال و فریزر</span></span>
                </Grid>
                <Grid item>
                    <div>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <MoreVertIcon/>
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
            </Grid><hr/>
            {/* body */}
            <Grid className={classes.body}>
                <Grid className={classes.bodyImg} item md={5} sm={5} xs={5}>
                    <img style={{width:'100px' , height:'180px' ,imageResolution:'from-image'}} src={data.select} alt=""/>
                </Grid>
                <Grid item md={7} sm={7} xs={7}>
                    <div  className="text-left">
                        <IconButton>
                             <ShareOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                              <BookmarkBorderIcon/>
                        </IconButton>
                        
                    </div>
                    <div  style={{lineHeight:'10px'}}>
                            <span className="font-10-px opacity font-yekan">گارانتی:</span><p className="font-12-px opacity">36ماهه سام سرویس</p>
                            <span className="font-10-px opacity font-yekan">قیمت برای همکار:</span><p ><span className="money-color">20.350.000</span> <span className="toman-blue">نومان</span> </p>
                            <span className="font-10-px opacity font-yekan">قیمت برای همکار:</span><p ><span className="money-color">22.228.000</span> <span className="toman-blue">نومان</span> </p>

                    </div>
                    
                </Grid>
            </Grid>
            <Grid className={classes.getArrow}>
                <span className="font-12-px font-yekan"> یخچال و فریزر دوقلوی سامسونگ مدل RR30PN-RZ30PN </span>
                <IconButton >
                        <ArrowBackIosIcon className={classes.color_black}/>
                </IconButton>
            </Grid>
            {/* liked */}
            <Grid className={classes.liked}>
                        <FavoriteBorderOutlinedIcon/>
                         <span>23 بار پسنده شده</span>
                        <span style={{borderLeft:'1px solid black' , margin:'0 10px'}}></span>
                        <span className="lighblue lightblue">نظر 28</span>
                        <span style={{borderLeft:'1px solid black' , margin:'0 10px'}}></span>
                        <StarBorderIcon className={classes.goldstar}/>
                        <span>4.5 (12)</span>
                        
            </Grid>
            {/* Opinion */}
            <Grid>
            <form style={{marginTop:'10px'}}  autoComplete="off">
                <textarea name="sdaw" id="" cols="30" rows="1">نظر خود را بنویسید</textarea>
                
            </form>
            </Grid>

            

            {/* bottom app bar */}
            <BottomAppBar img={data.select}/>
        </React.Fragment>
    )
}

export default LoginFour
