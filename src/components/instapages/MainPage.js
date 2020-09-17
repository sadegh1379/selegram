import { Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import React from 'react';
import BottomAppBar from '../static/BottomAppBar';
import {Link} from 'react-router-dom';
import eagle from './img/EAGLE.png';
// import badge from './img/Badge.png'
import Rating from '@material-ui/lab/Rating';
import HomeIcon from '@material-ui/icons/Home';
import navLogo from './img/navlogo.png';
import TabsComponent from './TabsComponent';

const useStyles = makeStyles(()=>({
    navbar:{
        fontFamily:'BYekan',
        display:'flex',
        justifyContent:'space-between',
        padding:'15px',
        backgroundColor:'#FAFAFA',
        alignItems:'center',
        height:'64px',
        color:'black',

    },
    topHead:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        
    },
    topHeadImg:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      borderRadius:'10px',
      overflow:'hidden',
      padding:'10px',
     

    },
    topHeadText:{
        display:'flex',
        padding:'10px',
        justifyContent:'space-between',
        fontFamily:'BYekan',
        textAlign:'center',
        lineHeight:'10px',
    },
    topHeadLevel:{
        marginTop:'-30px',
        textAlign:'center',
        marginBottom:'30px',
    },
    bio:{
        padding:'20px',
        fontFamily:'BYekan'
    }
   
}))

function MainPage() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);
    
    const toggleDrawer = () => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }else{
            setState(false);
        }

    }
    return (
    <>
        <div className="wow bounceInLeft " data-wow-duration="0.7s">
                
            {/* top navigation */}
            <Grid className={classes.navbar}>
                    <Grid>
                            <IconButton onClick={()=>setState(true)}>
                                <MenuIcon fontSize="large" />
                            </IconButton>
                    </Grid>
                    <Grid>لوازم خانگی ایگل</Grid>
                    <Grid>
                        <IconButton>
                            <p className="font-10-px font-yekan">ویرایش</p>
                            <EditOutlinedIcon  />
                        </IconButton>
                    </Grid>
                </Grid>


            {/* top haed */}
            <Grid className={classes.topHead}>
                <Grid className={classes.topHeadImg } item md={3} sm={3} xs={3}>
                    <img style={{width:'76px' , height:'76px' , border:'2px solid red' , boxShadow:'3px 3px 5px black', borderRadius:'10px'}} src={eagle} alt="loading..."/>
                    {/* <img className={classes.topHeadBadge} src={badge} alt="selegram"/> */}
                </Grid>
                <Grid className={classes.topHeadText } item md={9} sm={9} xs={9}>
                        <Grid>
                            <Typography className="font-yekan" variant="caption" display="block" gutterBottom>
                                محصولات
                            </Typography>
                            <Typography className="money-color" variant="button" display="block" gutterBottom>
                               12
                            </Typography>

                        </Grid>
                        <Grid>
                            <Typography className="font-yekan" variant="caption" display="block" gutterBottom>
                                دنبال کننده ها
                            </Typography>
                            <Typography className="money-color" variant="button" display="block" gutterBottom>
                               12.3k
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography className="font-yekan" variant="caption" display="block" gutterBottom>
                                دنبال شونده ها
                            </Typography>
                            <Typography className="money-color" variant="button" display="block" gutterBottom>
                               9
                            </Typography>
                        </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.topHeadLevel}>
                <IconButton>
                    <Rating name="size-small" defaultValue={5} max={6} size="small" readOnly />
                </IconButton>
                <span className="font-10-px">(از 12.800 نظر)</span>
                
            </Grid><hr className="opacity-5"/>

            {/* bio */}
            <Grid className={classes.bio}>
                <Typography className="font-yekan font-10-px" variant="button" display="block" gutterBottom>
                    تهران , شهریار
                </Typography>
                <Typography className="font-yekan opacity-5" variant="caption" display="block" gutterBottom>
                فروشگاه لوازم خانگی ایگل دارای 20 سال سابقه ی فروش در شهریار و نمایندگی 24 برند ایرانی و خارجی، تأمین کننده ی لوازم خانگی برقی و جهیزیه کامل عروس. 
                <br/>
                🎁🎁🎁🎁🎁
                <br/>
                قرعه کشی ماهانه دوم هر ماه از بین خریداران بالای 5 میلیون تومان  قیمت های ما را مقایسه کنید
                <br/>
                🎁🎁🎁🎁🎁
                </Typography>
            </Grid>

            {/* tabs */}
            <Grid>
                <TabsComponent/>
            </Grid>




            {/* drawer */}
            <SwipeableDrawer 
            anchor={'left'}
            open={state}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {/* {list} */}
            <div 
                className={classes.list }
                role="presentation"
                // onClick={}
                // onKeyDown={}
              >
                  <List >
                      <img style={{width:'150px' , margin:'50px'}} src={navLogo} alt="logo"/>
                        <ListItem button >
                                <Link className="navbar-link" style={{ textDecoration: 'none' }}  to="/">
                                        <ListItemIcon>
                                        <HomeIcon />
                                        </ListItemIcon>
                                </Link>
                                    <ListItemText  primary={'صفحه ی اصلی'}/>
                        </ListItem>
                        <ListItem button >
                                <Link className="navbar-link" style={{ textDecoration: 'none' }}  to="/">
                                        <ListItemIcon>
                                        <HomeIcon />
                                        </ListItemIcon>
                                </Link>
                                    <ListItemText  primary={'صفحه ی اصلی'}/>
                        </ListItem>
                        <ListItem button >
                                <Link className="navbar-link" style={{ textDecoration: 'none' }}  to="/">
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                </Link>
                                    <ListItemText  primary={'صفحه ی اصلی'}/>
                        </ListItem>
                                
                    </List>
           </div>

          </SwipeableDrawer>


        </div>
         <div>
                {/* bottom app bar */}
                <BottomAppBar/>

        </div>
    </>
       
    )
}

export default MainPage
