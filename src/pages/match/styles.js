import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../components/constans/theme";

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 1000,
        resizeMode: 'contain'
    },
    title:{
        
        fontSize : SIZES.h4,
        color: COLORS.black,
        fontWeight: "500"
    },


});
export default styles;