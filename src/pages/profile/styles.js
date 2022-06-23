import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../components/constans/theme";

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 120,
        borderRadius: 1000,
        resizeMode: 'contain',
    },
    title:{
        fontSize : SIZES.h4,
        color: COLORS.black,
        fontWeight: "500"
    },
    title_setting:{
        fontSize : SIZES.h4,
        color: COLORS.pink,
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
        width: SIZES.width / 1.5,
        marginTop: 20,
        backgroundColor: COLORS.red,
        borderRadius: 50,
        padding: 20,
    }


});
export default styles;