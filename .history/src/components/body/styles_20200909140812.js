import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    carouselContainer:{
        backgroundColor:'#FCFCFC',
        padding:'5px'
    },
    ulf:{
        backgroundColor:'#FA3D3D',
        position:'absolute',
        left:'-40px',
        marginTop:'20px',
        padding:'15px',
        // marginLeft:'0px',
        width:'85px',
        height:'10px',
        transform:'rotateZ(-270deg)',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        fontSize:'11px',
        color:'#FFFFFF',
        borderRadius:'10px 10px 0 0',
        boxShadow:'-3px 0px 6px'
    },
    informationGrid:{
            display:'flex',
            justifyContent:'space-between',
            padding:'8px',
            alignItems:'center'
    },
    informationText :{
        lineHeight:'30px',
        width:'100%',
        margin:'0 10px',
        padding:'0px'
    },
    body:{
        // backgroundColor:'gold',
        display:'flex'
    },
    bodyImg:{
        width:'100%',
        overflow:'hidden',
        padding:'10px',
        textAlign:'center'
    },
    getArrow:{
        padding:'10px'
    },
    color_black : {
        color:'black'
      },
    liked:{
        
        display:'felx'
        ,alignItems:'center',
        padding:'5px',
        marginTop:'-10px',
        opacity:'0.5'
    },
    goldstar:{
        color:'gold',
                
    }
}))


export default useStyles;
