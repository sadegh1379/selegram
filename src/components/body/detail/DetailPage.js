import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link } from 'react-router-dom';
import  MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkSharpIcon from '@material-ui/icons/BookmarkSharp';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import {useContext} from 'react';
import {context} from '../../../context';
import Carousel from 'react-material-ui-carousel';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import TextField from '@material-ui/core/TextField';
import DetailItem from './DetailItem';
import useStyles from './DetailPageStyles';
import Comments from './Comments';
import Review from './Review';
import Technical from './Technical';
import Similar from './Similar';
import AddCama from '../../static/AddCama';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';



function Item(props)
{
    return (
        <Grid style={{minHeight:'331px'}}>
            <img style={{width:'100%'}} src={props.item} alt="img"/>
        </Grid>
    )
}

function DetailPage() {
    const classes = useStyles();
    const data = useContext(context);
    const {detail , changeColor , addLike , addBookMark , addToCart } = data;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [color, setColor] = React.useState(detail.main_color);
    const [count, setCount] = React.useState('1');
    const [like , setLike] = React.useState(false);


    React.useEffect(()=>{
        changeColor(detail.id , color);
    }, [color , count])
  


    // fordropdown---------

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      //-------------------

    return (
        <Grid >
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
                        <p style={{color:'#616161'}} className="font-yekan" >{detail.state + " , " + detail.city}</p>
                </Grid>
            </Grid>

            {/* information */}
   
            <Grid className={classes.informationGrid}>
                            <hr/>
                                
                                <Grid item  className={classes.informationText}>
                                    <span style={{fontSize:'12px'}}>  <span className="font-yekan">{detail.name}</span></span><br/>
                                    <span className="font-yekan font-10-px" style={{opacity:'0.5' , color:'#616161'}}>برند  :  <span className="lighblue">{detail.brand}</span></span>
                                    <span className="font-yekan font-10-px" style={{opacity:'0.5', marginRight:'40px' , color:'#616161'}}>دسته بندی  : <span className="lighblue">{detail.grouping}</span></span>
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
                            {detail.saved?
                                (<IconButton onClick={()=>addBookMark(detail.id)}><BookmarkSharpIcon className="lighblue"/></IconButton>) : (<IconButton onClick={()=>addBookMark(detail.id)}><BookmarkBorderIcon /></IconButton>)}
                            
                        </div>
                </Grid>
                <Grid>
                <Carousel  autoPlay={false} >
                    {
                        detail.images.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Carousel>
                </Grid>
                <Grid className={classes.liked}>
                <IconButton onClick={()=>{addLike(detail.id); setLike(!like) }}> <FavoriteTwoToneIcon  color={like? 'secondary' : 'inherit'}/></IconButton>
                                <span>{detail.liked} بار پسنده شده</span>
                                <span style={{borderLeft:'1px solid black' , margin:'0 5px'}}></span>
                                <span className="lighblue lightblue">نظر <span>{detail.number_C}</span></span>
                                <span style={{borderLeft:'1px solid black' , margin:'0 5px'}}></span>
                                <IconButton><StarBorderIcon className={classes.goldstar}/></IconButton>
                                <span>{detail.fav}</span>
                                
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
                
                        <MenuItem value="white" className="font-yekan ">سفید روشن</MenuItem>
                        <MenuItem value="blue" className="font-yekan">آبی روشن </MenuItem>
                        <MenuItem value="grey" className="font-yekan">نقره ای متالیک</MenuItem>
                        <MenuItem value="red" className="font-yekan">قرمز روشن </MenuItem>
                
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
            
            {/* buy grid */}
            <Grid className={classes.buyGrid}>

                <Grid item  className={classes.buyText}>
                  <Grid className={classes.buyText1}> <span className="font-10-px opacity font-yekan ">قیمت برای همکار:</span><p ><span className="money-color">{AddCama(detail.main_price * count)}</span> <span className="toman-blue">تومان</span> </p></Grid>
                  <Grid className={classes.buyText2}><span className="font-10-px opacity font-yekan ">قیمت برای همکار:</span><p ><span className="money-color">{AddCama(detail.main_price * count)}</span> <span className="toman-blue">تومان</span> </p></Grid>
                </Grid>

                <Grid item>
                    {detail.inCart ? (<Button  className={classes.buyBtn} variant="contained" >به سبد افزوده شد</Button>)
                    :
                    ( <Button onClick={()=>addToCart(detail.id , count , color )} className={classes.buyBtn} variant="contained" >سفارش</Button>)
                    }
                 
                </Grid>

                <Grid item className={classes.Qustion}>
                      <p className={classes.QustionText}>قیمت منصفانه است؟</p>
                      <span className="opactity-30 "> بله </span>
                       <span className="opactity-30 mr-5">   خیر </span>
                </Grid>
                
            </Grid>
                    
            {/* another shopping */}
            <Grid className={classes.anotherShopping}>
                  <small className="opacity-5 font-yekan"> سایر فروشندگان : </small>
                  <p className="opacity font-yekan">فروشندان دیگر برای این کالا <span>2</span> </p>
                  {
                    [1,2,3].map((item , i)=><DetailItem key={i}/>)
                  }
                 
            </Grid>
            
            {/* Comments component */}
            <Grid className={classes.comments}>
                <Grid className={classes.commentsHead}>
                    <p>نظرات  <span style={{borderRight:'2px solid black' , paddingRight:'10px' , opacity:'0.5' , fontSize:'12px'}}>نظر 28</span></p>
                    <h4 className="lighblue font-14-px">لطفا نظر خود را بنویسید ...</h4>
                </Grid>
                {
                  detail.comments.map((item , i)=><Comments key={i} item={item} />)
                }

                <Grid className={classes.atherCmd}>
                  <p>
                      مشاهده 26 نظر دیگر
                  </p>
                  <IconButton >
                    <ArrowBackIosIcon className="lighblue"/>
                  </IconButton>
                </Grid>
                  
            </Grid>
                
            {/* Review */}
            <Grid className={classes.review}>
                <Grid className={classes.ReviewsHead}><p>نقد و بررسی  </p></Grid>
                <Grid><Review text={detail.technical}/></Grid>
            </Grid>

            {/* Technical Specifications */}
            <Grid className={classes.technical}>
                <Grid className={classes.ReviewsHead}><p>اطلاعات فنی </p></Grid>
                <Grid><Technical text={detail.review}/></Grid>
            </Grid>
    
            {/* Similar  */}
            <Grid className={classes.similar}>
              <Grid className={classes.ReviewsHead}><p>کالا های مشابه </p></Grid>
              <Grid>{
                [1,2,3].map((item , i)=><Similar key={i} img={data.select}/>)
                }
              </Grid>
              <Grid className={classes.moreGrid}><Button variant="outlined" className={classes.moreBtn} color="primary">بیشتر ...</Button></Grid>
            </Grid>
    </Grid>
    )
}

export default DetailPage
