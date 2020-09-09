import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Button from '@material-ui/core/Button';
import logo from './img/navlogo.png'

function Navbar() {
    const classes = useStyles();
    return (
      <Grid className={classes.navContainer}>
          <Grid>
              <Button>
                <NotificationsOutlinedIcon/>
              </Button>
          </Grid>
          <Grid>
              selegram
          </Grid>
          <Grid>
                <Button>
                <ShoppingCartOutlinedIcon/>
                </Button>
          </Grid>
      </Grid>
    )
}

export default Navbar
