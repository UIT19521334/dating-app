import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constans/theme";

const styles = StyleSheet.create({
    cardd:{
        backgroundColor: COLORS.white,
        borderColor: COLORS.grey,
        borderWidth: 1,
        borderRadius: 20,
        height: SIZES.height / 1.35,
    },
    image:{
        
        height: SIZES.height / 1.6,
        width : SIZES.width / 1.1,
        borderTopRightRadius: 20,
        borderTopLeftRadius : 20,
        resizeMode: 'contain'
    },
   
    
    
});
export default styles;