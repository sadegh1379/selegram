import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import ImageGridListOne from './ImageGridListOne';
import ImageGridListTwo from './ImageGridListTwo';
import { Badge, Grid, IconButton, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SpecialSelaItem from './SpecialSaleItem';


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
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    marginBottom:'100px',
  },
  tab:{
    fontFamily:'BYekan',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    
  },
  active:{
    
      borderBottom : '2px solid #009FFF',
    
  },
  appBar:{
    backgroundColor:'#FFFFFF',
    boxShadow:'none'
  },
  imageGrid:{
    display:'flex',
    justifyContent:'space-between',
    height:'auto',
    

  },
  
}));

export default function TabsComponent() {
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
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor={value === 2 ? "secondary":"primary"}
          textColor={value === 2 ? "secondary":"primary"}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab  className={clsx(classes.tab)} label={<Badge  badgeContent="8" color="primary">تک محصول</Badge>} {...a11yProps(0)} ></Tab>
          <Tab className={classes.tab} label={<Badge  badgeContent="2" color="primary">لیست محصولات</Badge>} {...a11yProps(1)} />
          <Tab className={classes.tab}  label={<Badge  badgeContent="5" color="secondary">فروش ویژه</Badge>} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* grid list */}
            <ImageGridListOne />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>

          {/* head */}
            <Grid className="d-flex flex-between padding-10 flex-items-center ">
              <Grid>
                  <Typography className="font-14"  display="block" gutterBottom>
                    تعداد : 12 عدد
                  </Typography>
                  <Typography variant="overline" display="block" gutterBottom>
                    برند : سامسونگ 
                  </Typography>
              </Grid>
              <Grid className="text-left">
                        <span className="lighblue">جزئیات</span>
                        <IconButton>
                            <ArrowBackIosIcon className="lighblue"/>
                        </IconButton>
                        <Typography variant="overline" display="block" gutterBottom>
                          گارانتی : 36 ماهه سام سرویس  
                      </Typography>
              </Grid>
            </Grid>
          {/* list */}
          <ImageGridListTwo />

          {/* head */}
          <Grid className="d-flex flex-between padding-10 flex-items-center">
              <Grid>
                  <Typography className="font-14"  display="block" gutterBottom>
                    تعداد : 12 عدد
                  </Typography>
                  <Typography variant="overline" display="block" gutterBottom>
                    برند : سامسونگ 
                  </Typography>
              </Grid>
              <Grid className="text-left">
                        <span className="lighblue">جزئیات</span>
                        <IconButton>
                            <ArrowBackIosIcon className="lighblue"/>
                        </IconButton>
                        <Typography variant="overline" display="block" gutterBottom>
                          گارانتی : 36 ماهه سام سرویس  
                      </Typography>
              </Grid>
            </Grid>
          {/* list */}
          <ImageGridListTwo />
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          {
            [1,2,3].map((item , i)=>{
              return(<SpecialSelaItem key={i}/>)
            })
          }
          
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
