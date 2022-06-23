import { View, Text, Image } from 'react-native'
import React from 'react'
import { HStack, VStack, Center } from 'native-base'
import GirlArr from '../../assets/json/girl.json';
import styles from './styles';
import Feather from "react-native-vector-icons/Feather";
import { COLORS } from '../constans/theme';
const Card = (card) => {
    return (
        <Center style={{marginTop:20}} >
            <VStack style={styles.cardd} space={2} >
                <Image source={{ uri: card.card.fistImage }} style={styles.image} />
                <View style={{padding: 10}}>
                    <HStack space={2} justifyContent="space-between" alignItems="center">
                        <VStack space={2} >
                            <Text>{card.card.name}, {card.card.age}</Text>
                            <Text>{card.card.job}, {card.card.company}</Text>
                        </VStack>
                        <HStack space={2}>
                            <Feather name="book-open" size={25} color={COLORS.black} />
                            <Text> {card.card.readCount} </Text>
                        </HStack>
                    </HStack>
                </View>
            </VStack>
        </Center>
    )
}

export default Card