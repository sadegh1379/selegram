import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ice from './img/ice.png'

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
export default function ImageGridListTwo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={75} cols={5} className={classes.gridList}>
        {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((tile , i) => (
          <GridListTile key={i} className="text-center">
            <img src={ice} alt="loading" />
            
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
