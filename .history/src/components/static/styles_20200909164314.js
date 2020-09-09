import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navContainer:{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'#5A6065',
        padding:'16px',
        opacity:'100%',
        alignItems:'center'
    },
    navlogo:{
        textAlign:'center'
    }
}))


export default useStyles;
