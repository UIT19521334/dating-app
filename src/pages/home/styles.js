import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../components/constans/theme";

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.grey,
        borderWidth: 1,
        borderRadius: 20,
        height: SIZES.height / 1.35,
    },
    image: {

        height: SIZES.height / 1.6,
        width: SIZES.width / 1.1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        resizeMode: 'contain'
    },
    icon: {
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