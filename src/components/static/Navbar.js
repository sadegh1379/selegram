import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Button from '@material-ui/core/Button';
import logo from './img/navlogo.png';
import {Link } from 'react-router-dom'
import { Badge } from '@material-ui/core';

function Navbar({cart}) {
    const classes = useStyles();
    return (
      <Grid  className={classes.navContainer}>
          <Grid>
            <Link to="/login">
                <Button>
                    <NotificationsOutlinedIcon/>
                </Button>
            </Link> 
          </Grid>
          <Grid className={classes.navlogo}>
              <img style={{width:'50%'}} src={logo} alt="selegram"/>
          </Grid>
          <Grid>
              <Link to="/cart">
                <Button>
                    <Badge
                         badgeContent={cart.length}
                         color="secondary"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
>
                       <ShoppingCartOutlinedIcon/>
                    </Badge>
                </Button>
              </Link>
              
          </Grid>
      </Grid>
    )
}

export default Navbar
