import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../components/constans/theme";

const styles = StyleSheet.create({
    title:{
        fontSize : SIZES.h6,
        color: COLORS.black,
        fontWeight: "500"
    },
    button:{
        width: SIZES.width / 1.1,
        marginTop: 20,
        backgroundColor: COLORS.red,
        borderRadius: 10,
        padding: 20,
    },
    notification:{
        width: SIZES.width - 20,
        textAlign: "center",
        fontSize: SIZES.h6,
        paddingTop: 20,
        paddingBottom: 20
    }

});
export default styles;