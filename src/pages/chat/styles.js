import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../components/constans/theme";

const styles = StyleSheet.create({
    image: {
        marginTop: 20,
        height: SIZES.height / 2,
        width: SIZES.width / 1.1,
        borderRadius: 20,
        resizeMode: 'contain'
    },
    title:{
        marginTop: 20,
        fontSize : SIZES.h4,
        color: COLORS.grey,
        fontWeight: "600"
    },
    button:{
        width: SIZES.width / 1.1,
        marginTop: 20,
        backgroundColor: COLORS.red,
        borderRadius: 10,
        padding: 20,
    }

});
export default styles;