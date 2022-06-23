import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../components/constans/theme";

const styles = StyleSheet.create({
    container :{
        flexDirection:"row",
        alignItems:"center",
        padding: 20,
        backgroundColor: COLORS.white,
        marginTop: 5,
    },
    
    banner: { 
        marginTop: SIZES.height / 30 ,
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        width:SIZES.width 
    },
    title:{
        maxWidth: SIZES.width / 1.1,
        textAlign:"center",
        fontSize : SIZES.h5,
        color: COLORS.grey,
    },
    search:{
        fontSize:SIZES.h4,
        color: COLORS.black,
        width: SIZES.width - 20,
        marginLeft: 20,
        
    },
    wrapDot:{
        position:"absolute",
        bottom : SIZES.height / 4.5,
        flexDirection: "row",
        alignSelf: "center"
    },
    dotActive:{
        margin: 10,
        fontSize: SIZES.h2,
        color : COLORS.red
    },
    dot:{
        margin:10,
        fontSize: SIZES.h2,
        color: COLORS.grey
    },
    image:{
        marginTop: SIZES.height / 60,
        height: SIZES.height / 2.3,
        width : SIZES.width / 1.5,
        borderRadius: 20,
        resizeMode: 'contain'
    },
    btn_skip:{
        flex :0,
        justifyContent: 'center', 
        alignItems: 'center',
        width: SIZES.width - 60,
        padding : 15,
        marginLeft : 30,
        marginTop: SIZES.height / 7,
        backgroundColor : COLORS.blue,
        borderRadius : 444,
    },
    textFooter:{
        maxWidth: SIZES.width / 1.1,
        textAlign: "center",
        marginTop: SIZES.height / 15,
        fontSize: SIZES.h6
    }
    
    
    
});
export default styles;