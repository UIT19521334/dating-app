import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { SIZES } from '../constans/theme';
import { HStack, VStack, Center } from 'native-base';
// Get some demo photo
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img1.png";
import img3 from "../../assets/img/img2.jpg";
import img4 from "../../assets/img/img2.png";
import img5 from "../../assets/img/img3.png";
import img6 from "../../assets/img/img4.jpg";

const Photos = () => {
    return (
        <VStack 
            space={2} 
            justifyContent="space-between"
            marginTop={5}
        >
            <HStack 
                space={3} 
                justifyContent="space-between" 
                width={SIZES.width} 
                paddingLeft= {5}
                paddingRight= {5}

            >
                <Image source={img1} style={styles.image} />
                <Image source={img2} style={styles.image} />
                <Image source={img3} style={styles.image} />
            </HStack>
            <HStack 
                space={3} 
                justifyContent="space-between" 
                width={SIZES.width} 
                paddingLeft= {5}
                paddingRight= {5}
            >
                <Image source={img4} style={styles.image} />
                <Image source={img5} style={styles.image} />
                <Image source={img6} style={styles.image} />
            </HStack>
        </VStack>

    )
}

export default Photos