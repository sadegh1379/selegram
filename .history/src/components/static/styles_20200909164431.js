import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navContainer:{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'#FCFCFF',
        padding:'16px',
        opacity:'100%',
        alignItems:'center'
    },
    navlogo:{
        textAlign:'center'
    },
    appBar:{
        backgroundColor:'red'
    }
}))


export default useStyles;
