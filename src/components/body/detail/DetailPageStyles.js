import {makeStyles}  from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        //   margin: theme.spacing(3),
          width: '100%',
        },
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
        
      },
    topnav:{
        backgroundColor:'#FCFCFC',
        padding:'10px 5px',
        display:'flex',
        height:'64px',
        justifyContent:'space-between',
        alignItems:'center',
        color:'#212121',
        lineHeight:'10px'
    },
    navText:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
       
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
    iconsBody:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    liked:{
        
        display:'felx'
        ,alignItems:'center',
        padding:'5px',
        // marginTop:'-10px',
        opacity:'0.5'
    },
    goldstar:{
        color:'gold',
             
    },
    
    selectColor:{
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            fontFamily:'BYekan',
            borderColor: "#009FFF"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            fontFamily:'BYekan',
            borderColor: "#009FFF"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            fontFamily:'BYekan',
            borderColor: "#009FFF"
          },
          "& .MuiOutlinedInput-input": {
            fontFamily:'BYekan',
            color: "black"
          },
          "&:hover .MuiOutlinedInput-input": {
            color: "#009FFF"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#009FFF"
          },
          "& .MuiInputLabel-outlined": {
            color: "#009FFF"
          },
          "&:hover .MuiInputLabel-outlined": {
            color: "#009FFF"
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#009FFF"
          },
      fontFamily:'BYekan',
          
    },
    selectCount:{
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          fontFamily:'BYekan',
            borderColor: "#009FFF"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FFF"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FFF"
          },
          "& .MuiOutlinedInput-input": {
            color: "black"
          },
          "&:hover .MuiOutlinedInput-input": {
            color: "#009FFF"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#009FFF"
          },
          "& .MuiInputLabel-outlined": {
            color: "#009FFF"
          },
          "&:hover .MuiInputLabel-outlined": {
            color: "#009FFF"
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: "purple"
          },
    
    },
    formGrid:{
        margin:'auto 10px'
    },
    buyText:{
      display:'flex',
      padding:'10px',
      textAlign:'center',
      marginTop:'16px',
      lineHeight:'5px'
    },
    buyText1:{
      textAlign:'left',
      width:'100%',
      paddingLeft:'10px'
    },
    buyText2:{
      textAlign:'center',  
      width:'100%'
      
    },
    buyBtn:{
      backgroundColor:'#009FFF',
      width:'150px',
      height:'39px',
      color:'#FFFFFF',
      fontFamily:'BYekan',
      marginLeft:'20px',
      border:'0.5px solid #009FFF',
      boxShadow:'0px 20px 20px #C2BDBD73',
      
      '&:focus':{
        backgroundColor:'#009FFF',
        boxShadow:'0px 20px 20px #C2BDBD73',
      }
    },
    Qustion:{
      marginTop:'36px',
      marginLeft:'24px',
      marginBottom:'20px'
      
    },
    QustionText:{
      opacity:'20%',
      marginRight:'30px'
      
    },
    buyGrid:{
      borderBottom:'10px solid #C2BDBD73',
     
    },
    anotherShopping:{
      margin:'10px',
      lineHeight:'10px',
      borderBottom:'10px solid #C2BDBD73',
    },
    comments:{
        
        fontFamily:'BYekan',
        lineHeight:'12px',
        borderBottom:'10px solid #C2BDBD73',
    },
    commentsHead:{
        padding:'13px 10px',
        fontFamily:'BYekan',
        color:'#000A12'
    },
    atherCmd:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        color:'#009FFF',
        fontSize:'14px'
    },
    ReviewsHead:{
        padding:'0px 10px',
        fontFamily:'BYekan',
        color:'#000A12'
    },
    technical:{
        borderBottom:'10px solid #C2BDBD73',

    },
    moreGrid:{
       
       textAlign:'center',
        width:'100%',
        marginTop:'50px',
        marginBottom:'100px'
    },
    moreBtn:{
        width:'80%',
        border:'1px solid #009FFF',
        color:'#009FFF',
        '&:focus':{
            border:'1px solid #009FFF',
        }
    },
    slider:{
      Height:'331px'
    },
    colorRedGrid:{
      with:'20px',
      height:'20px',
      backgroundColor:'red'
    }
    
    
}))

export default useStyles;