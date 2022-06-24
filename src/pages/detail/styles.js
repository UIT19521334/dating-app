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
        paddingLeft: 10,
        fontSize : SIZES.h4,
        color: COLORS.black,
        fontWeight: "500"
    },
    title1:{
        paddingLeft: 10,
        fontSize : SIZES.h5,
        color: COLORS.black,

    },
    title2:{
        paddingLeft: 10,
        fontSize : SIZES.h6,
        color: COLORS.black,

    },
    search:{
        fontSize:SIZES.h4,
        color: COLORS.black,
        width: SIZES.width - 20,
        marginLeft: 20,
        
    },
    wrapDot:{
        position:"absolute",
        marginTop: SIZES.height / 2.5,
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
    dotActive2:{
        margin: 4,
        fontSize: SIZES.h4,
        color : COLORS.red
    },
    dot2:{
        margin:4,
        fontSize: SIZES.h4,
        color: COLORS.grey
    },
    image:{
        height: SIZES.height / 2,
        width : SIZES.width ,
        
    },
    interestedText:{
        padding: 20,
        marginLeft: 20,
        margin : 5,
        borderColor: COLORS.red,
        borderWidth: 1.5,
        borderRadius: 10,
        
        fontSize: SIZES.h5,
        color: COLORS.red,
        fontWeight: "500"
    },
    groupButton : {
        position: "absolute",
        width: SIZES.width,
        marginTop: SIZES.height / 1.15,
    },
    icon:{
        padding: 5,
        backgroundColor: COLORS.white,
        borderRadius: 1000,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
});
export default styles;