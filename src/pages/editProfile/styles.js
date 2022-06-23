import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../components/constans/theme";

const styles = StyleSheet.create({
    image: {
        height: 240,
        width: 240,
        borderRadius: 10,
        margin: 10,
        marginLeft: 0,
        marginRight:0,
        resizeMode: 'contain',
    },
    image1: {
        height: 110,
        width: 110,
        borderRadius: 10,
        borderColor: COLORS.grey,
        borderWidth: 1,
        margin: 10,
        marginBottom: 0,
        marginLeft: 0,
        resizeMode: 'contain',
    },
    image2: {
        height: 110,
        width: 110,
        borderRadius: 10,
        borderColor: COLORS.grey,
        borderWidth: 1,
        margin: 10,
        marginRight:0,
        marginBottom: 0,
        marginLeft: 0,
        resizeMode: 'contain',
    },
    title:{
        fontSize : SIZES.h6,
        padding: 10,
        backgroundColor: COLORS.lightGrey,
        color: COLORS.black,
        fontWeight: "500"
    },
    title1:{
        marginTop: 10,
        fontSize : SIZES.h6,
        padding: 10,
        backgroundColor: COLORS.lightGrey,
        color: COLORS.black,
        fontWeight: "500"
    },
    input:{
        fontSize : SIZES.h4,
        padding: 10,
        paddingTop : 20,
        paddingBottom: 20,
        color: COLORS.black,
        fontWeight: "500"
    },
    descButton:{
        fontSize : SIZES.h6,
        padding: 10,
        color: COLORS.grey,
        fontWeight: "500"
    },
    icon : {
        backgroundColor: COLORS.red,
        borderRadius: 1000,
        padding: 10,
        marginTop: -30,
        marginLeft: 90
    },
    button:{
        position: "absolute",
        bottom: 5,
        right: -5,
        backgroundColor: COLORS.red,
        borderRadius: 1000,
        borderColor: COLORS.lightGrey,
        borderWidth: 2,
        padding: 4,
    },
    button2:{
        position: "absolute",
        bottom: -5,
        right: 0,
        backgroundColor: COLORS.red,
        borderRadius: 1000,
        borderColor: COLORS.lightGrey,
        borderWidth: 2,
        padding: 4,
    }


});
export default styles;