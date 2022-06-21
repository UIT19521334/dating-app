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
        marginTop: SIZES.height / 8,
        paddingBottom: SIZES.height / 4,
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        width:SIZES.width 
    },
    title:{
        maxWidth: SIZES.width / 1.5,
        textAlign:"center",
        fontSize : SIZES.h4,
        color: COLORS.red,
    },
    search:{
        fontSize:SIZES.h4,
        color: COLORS.black,
        width: SIZES.width - 20,
        marginLeft: 20,
        
    },
    wrapDot:{
        position:"absolute",
        bottom : SIZES.height / 8,
        flexDirection: "row",
        alignSelf: "center"
    },
    dotActive:{
        margin: 10,
        fontSize: SIZES.h2,
        color : COLORS.purple
    },
    dot:{
        margin:10,
        fontSize: SIZES.h2,
        color: COLORS.white
    },
    btn_skip:{
        flex :0,
        justifyContent: 'center', 
        alignItems: 'center',
        width: SIZES.width - 60,
        padding : 15,
        marginLeft : 30,
        marginTop : 30,
        backgroundColor : COLORS.purple,
        borderRadius : 444,
        
    }
    
    
    
});
export default styles;