import React , {useContext} from 'react';
import Navbar from '../../static/Navbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import {context} from '../../../context';
import useStyles from '../styles';
import StarIcon from '@material-ui/icons/Star';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkSharpIcon from '@material-ui/icons/BookmarkSharp';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import BottomAppBar from '../../static/BottomAppBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Link} from 'react-router-dom';
import FlexButtonV from '../../static/FlexButtonV';
import AddCama from '../../static/AddCama';



function LoginFour() {
    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [opinion , setOpinion] = React.useState('لطفا نظر خود را بنویسید ...');

    const [like , setLike] = React.useState(false);

    const data = useContext(context);
    const {detail , handleDetail , changeColor , addLike , addBookMark , cart} = data;

    

    // fordropdown---------

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      //-------------------

    

    return (
        <>
             <div className="wow bounceInRight " data-wow-duration="0.5s" data-wow-dely="0.5s">
                    <Navbar cart={cart}/>
                    <Grid className={classes.loginFour}>
           
                            <Grid className={classes.carouselContainer}>
                                <ul className="no-scroll" style={{display:'flex' , overflow:'scroll' , listStyle:'none' }}>
                                    <span className={classes.ulf}>
                                        <StarIcon/>
                                            فروش ویژه
                                    </span>
                                    {data.data ? data.data.map((item , i)=>{
                                        return(
                                            <li style={{margin:'0px 8px' }} key={i}>
                                                <img onClick={()=>handleDetail(item.id)} style={{width:'64px' , height:'83px'}}  src={item.shopping_img} alt={item.shopping_name}/>
                                                
                                                
                                            </li>
                                        )
                                    }) : null
                                    }
                                </ul>
                            </Grid><hr style={{margin:'-8px auto' }}/>

                            {/* information component */}
                
                            <Grid className={classes.informationGrid}>
                                <Grid>
                                    <img alt="img" style={{width:'40px'}} src={detail.shopping_img}/>
                                        <FlexButtonV id={detail.id} changeColor={changeColor}/>
                                </Grid>
                                <Grid item  className={classes.informationText}>
                                    <span className="font-yekan font-12-px" style={{borderRight:'1px solid black' , paddingRight:'10px' }}>لوازم خانگی  ایگلس</span>
                                <span className="font-yekan  font-10-px" style={{marginRight:'35px' , opacity:'0.5'}}>{detail.state} , {detail.city}</span><br/>
                                    <span className="font-yekan font-10-px" style={{opacity:'0.5'}}>برند  :  <span className="lighblue">{detail.brand}</span></span>
                                    <span className="font-yekan font-10-px" style={{opacity:'0.5', marginRight:'40px'}}>دسته بندی  : <span className="lighblue">{detail.grouping}</span></span>
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
                            </Grid><hr style={{margin:'-8px auto' , marginBottom:'10px'}}/>
                            {/* body */}
                            <Grid className={classes.body}>
                                <Grid className={classes.bodyImg} item md={6} sm={6} xs={6}>
                                    <img className={classes.bodyImg1} style={{width:'100%'  ,}} src={detail.img} alt="img"/>
                                </Grid>
                                <Grid item md={6} sm={6} xs={6}>
                                    <div  className="text-left">
                                        <IconButton>
                                            <ShareOutlinedIcon/>
                                        </IconButton>
                                        {detail.saved?
                                        (<IconButton onClick={()=>addBookMark(detail.id)}><BookmarkSharpIcon className="lighblue" /></IconButton>) : (<IconButton onClick={()=>addBookMark(detail.id)}><BookmarkBorderIcon /></IconButton>)}
                                        
                                    </div>
                                    <div  style={{lineHeight:'10px'}}>
                                            <span className="font-10-px opacity font-yekan">گارانتی:</span><p className="font-12-px opacity">{detail.granti}</p>
                                            <span className="font-10-px opacity font-yekan">قیمت برای همکار:</span><p ><span className="money-color">{AddCama(detail.main_price)}</span> <span className="toman-blue">نومان</span> </p>
                                            <span className="font-10-px opacity font-yekan">قیمت برای همکار:</span><p ><span className="money-color">{AddCama(detail.main_price)}</span> <span className="toman-blue">نومان</span> </p>

                                    </div>
                                    
                                </Grid>
                            </Grid>
                            
                            <Grid className={classes.getArrow}>
                                <span className="font-12-px font-yekan">{detail.name}</span>
                                <Link to="/detailpage">
                                    <IconButton >
                                            <ArrowBackIosIcon className={classes.color_black}/>
                                    </IconButton>
                                </Link>
                            </Grid>
                            {/* liked */}
                            <Grid className={classes.liked}>
                            <IconButton onClick={()=>{addLike(detail.id); setLike(!like) }}> <FavoriteTwoToneIcon  color={like? 'secondary' : 'inherit'}/></IconButton>
                                        <span>{detail.liked} بار پسنده شده</span>
                                        <span style={{borderLeft:'1px solid black' , margin:'0 5px'}}></span>
                                        <span className="lighblue lightblue">نظر <span>{detail.number_C}</span></span>
                                        <span style={{borderLeft:'1px solid black' , margin:'0 5px'}}></span>
                                        <IconButton><StarBorderIcon className={classes.goldstar}/></IconButton>
                                        <span>{detail.fav}</span>
                                        
                            </Grid>
                            {/* Opinion */}
                            <Grid>
                            <form style={{width:'100%' , marginTop:'10px' , padding:'10px'}}  autoComplete="off">
                                <textarea style={{border:'0px'}} onChange={(e)=>setOpinion(e.target.value)} value={opinion} className="font-yekan opacity"  id="" cols="30" rows="2"></textarea>
                                
                            </form>
                            </Grid>


                </Grid>
            </div>
            <div>
                {/* bottom app bar */}
                <BottomAppBar img={data.kala[0].img}/>
            </div>
    </>
    )
}

export default LoginFour
