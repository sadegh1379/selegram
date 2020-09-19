import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ice from './img/ice.png';
import {Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    
  },
  gridList: {
    width: '100%',
    // height: 'auto',
    margin:'0px',
    // justifyContent:'center'
  },
 
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridListOne() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={125} cols={3} className={classes.gridList}>
        {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((tile , i) => (
           
                <GridListTile   key={i} className="text-center">
                    <Link to="/detailpage">
                        <img style={{width:'100%' , backgroundPosition:'center'}} src={ice} alt="loading" />
                    </Link>
                      <GridListTileBar title={ <p style={{fontSize:'10px'}}>200.300.000</p> }/> 
                  
                    
                </GridListTile>
                
            
        ))}
      </GridList>
    </div>
  );
}
