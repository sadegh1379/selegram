import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Grid, IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Orders from './Orders';
import Requests from './Requests';

const useStyles = makeStyles(()=>({
    topnav:{
        backgroundColor:'#FCFCFC',
    },
    appbar:{
        backgroundColor:'#FCFCFC',
        boxShadow:'none',
        fontFamily:'BYekan',
        
    },
    appbarTabs:{
        fontSize:'16px',
        fontFamily:'BYekan',
       
    },
    tab:{
        color:'#000A12',
        
        '&:active':{
            color:'#009FFF',
            borderBottom:'5px solid #009FFF',
            
        },
        '&:focus':{
            color:'#009FFF',
            borderBottom:'5px solid #009FFF'
        },
        
    }
}))

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={1} pt={3}>
             {children}
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }


function Cart() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const handleChangeIndex = (index) => {
        setValue(index);
      };

    return (
        <Grid>
             {/* top navigation */}
             <Grid className={classes.topnav}>
                    <Link to="/">
                        <IconButton>
                            <ChevronRightIcon color="primary" fontSize="large"/>
                        </IconButton>
                    </Link>
            </Grid>

            {/* menu */}
            <Grid>
                    <AppBar className={classes.appbar} position="static" color="default">
                            <Tabs
                            className={classes.appbarTabs}
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                           
                            variant="fullWidth"
                            aria-label="full width tabs example"
                            >
                            <Tab className={classes.tab} label="سفارش ها" {...a11yProps(0)} />
                            <Tab className={classes.tab} label="درخواست ها" {...a11yProps(1)} />
                            </Tabs>
                    </AppBar>
                    <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                            >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <Orders/>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <Requests/>
                            </TabPanel>
                            
                    </SwipeableViews>

            </Grid>
        </Grid>
    )
}

export default Cart
