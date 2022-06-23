import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Box, Center, HStack, Button, ScrollView, Switch, Slider, VStack } from 'native-base'
import { COLORS, SIZES } from "../../components/constans/theme";

// type DistanceType = 'Km.' | 'Mi.';

const Setting = ({navigation}) => {
  const [onChangeValue, setOnChangeValue] = React.useState(10);
  const [isMan, setIsMan] = useState(false);
  const [distanceValue, setDistanceValue] = useState('Km.');
  // set address
  const [addressValue, setAddressValue] = useState("Swiping in");
  
  return (
    <View>
      <ScrollView>
        <Text style={[styles.title, { paddingLeft: 10, marginTop: 20 }]}>Discovery Settings</Text>
        <Center marginTop={4}>
          <Box
            borderColor={COLORS.grey}
            borderWidth={1}
            borderRadius={5}
            padding={4}
            backgroundColor={COLORS.white}
            width={SIZES.width - 20}
            shadow={5}
          >
            <HStack space={2} justifyContent="space-between" alignItems="center" >
              <Text>{addressValue}</Text>
              <Button variant="ghost" >My current location</Button>
            </HStack>
          </Box>
          <Text style={{ marginTop: 10, marginBottom: 10 }} >
            Change your swipe location to see Tinder member in other cities
          </Text>
          <Box
            borderColor={COLORS.grey}
            borderWidth={1}
            borderRadius={5}
            padding={4}
            backgroundColor={COLORS.white}
            width={SIZES.width - 20}
            shadow={5}
          >
            <Text style={[styles.title, { color: COLORS.red }]} >Show me</Text>
            <HStack space={2}
              paddingTop={2}
              alignItems="center"
              justifyContent="space-between">
              <Text>Man</Text>
              <Switch
                onToggle={() => { setIsMan(!isMan) }}
                isChecked={isMan}
                size="lg"
                onTrackColor={COLORS.red}
              />
            </HStack>
            <HStack space={2}
              paddingTop={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Woman</Text>
              <Switch
                onToggle={() => { setIsMan(!isMan) }}
                isChecked={!isMan}
                size="lg"
                onTrackColor={COLORS.red}
              />
            </HStack>
          </Box>
          <Box
            borderColor={COLORS.grey}
            marginTop={2}
            borderWidth={1}
            borderRadius={5}
            padding={4}
            backgroundColor={COLORS.white}
            width={SIZES.width - 20}
            shadow={5}
          >
            <HStack space={2} justifyContent="space-between" alignItems="center">
              <Text style={[styles.title, { color: COLORS.red }]} >Search Distance</Text>
              <Text>{onChangeValue} km.</Text>
            </HStack>
            <Slider
              marginTop={2}
              defaultValue={onChangeValue}
              colorScheme="secondary"
              onChange={v => {
                setOnChangeValue(Math.floor(v));
              }}
            >
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </Box>
          <Box
            borderColor={COLORS.grey}
            marginTop={2}
            borderWidth={1}
            borderRadius={5}
            padding={4}
            backgroundColor={COLORS.white}
            width={SIZES.width - 20}
            shadow={5}
          >
            <HStack space={2} justifyContent="space-between" alignItems="center">
              <Text>Show me on DatingApp</Text>
              <Switch
                size="lg"
                onTrackColor={COLORS.red}
              />
            </HStack>
          </Box>
          <Text style={{ margin: 10, textAlign: "left" }} >
            DatingApp uses these preferences to suggest matches.
            Some match suggestions may not
            fail within your desired paramethers.
          </Text>
          <Box
            borderColor={COLORS.grey}
            marginTop={2}
            borderWidth={1}
            borderRadius={5}
            padding={4}
            backgroundColor={COLORS.white}
            width={SIZES.width - 20}
            shadow={5}
          >
            <Text style={[styles.title, { color: COLORS.red }]} >Web profile</Text>
            <HStack marginTop={4} space={2} justifyContent="space-between" alignItems="center" >
              <Text style={{ color: COLORS.grey, fontSize: SIZES.h6, fontWeight: "500" }}>
                Username
              </Text>
              <Text style={{ color: COLORS.grey, fontSize: SIZES.h6, fontWeight: "500" }} >
                Claim Yours
              </Text>
            </HStack>
            <Text style={{ marginTop: 20 }} >
              Create a Username. Share your Username. Have people all over
              the word swipe you rigth on DatingApp
            </Text>
          </Box>

        </Center>
        <Text style={[styles.title, { paddingLeft: 10, marginTop: 20, marginBottom: 20 }]} >App settings</Text>
        <Center>
          <Box
            borderColor={COLORS.grey}
            marginTop={2}
            borderWidth={1}
            borderRadius={5}
            padding={4}
            backgroundColor={COLORS.white}
            width={SIZES.width - 20}
            shadow={5}
          >
            <Text style={[styles.title, { color: COLORS.red }]} >Notifications</Text>
            <HStack space={2}
              paddingTop={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>New Matches</Text>
              <Switch
                size="lg"
                onTrackColor={COLORS.red}
              />
            </HStack>
            <HStack space={2}
              paddingTop={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Messages</Text>
              <Switch
                size="lg"
                onTrackColor={COLORS.red}
              />
            </HStack>
            <HStack space={2}
              paddingTop={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Messages Likes</Text>
              <Switch
                size="lg"
                onTrackColor={COLORS.red}
              />
            </HStack>
            <HStack space={2}
              paddingTop={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Supper Likes</Text>
              <Switch
                size="lg"
                onTrackColor={COLORS.red}
              />
            </HStack>
          </Box>
          <Box
            borderColor={COLORS.grey}
            marginTop={2}
            borderWidth={1}
            borderRadius={5}
            padding={4}
            backgroundColor={COLORS.white}
            width={SIZES.width - 20}
            shadow={5}
          >
            <HStack space={2} justifyContent="space-between" alignItems="center" >
              <Text style={[styles.title, { color: COLORS.red }]} >Show Distance in</Text>
              <Text style={styles.title} >{distanceValue}</Text>
            </HStack>
            <HStack
              space={2}
              justifyContent="center"
              alignItems="center"
              marginTop={4}
            >
              <Button
                size='lg'
                width={SIZES.width / 2 - 30}
                variant={distanceValue == "Km." ? 'solid' : 'ghost'}
                colorScheme="secondary"
                onPress={() => {
                  setDistanceValue("Km.")
                }}
              >
                Km.
              </Button>
              <Button
                size='lg'
                width={SIZES.width / 2 - 30}
                variant={distanceValue == "Mi." ? 'solid' : 'ghost'}
                colorScheme="secondary"
                onPress={() => {
                  setDistanceValue("Mi.")
                }}
              >
                Mi.
              </Button>
            </HStack>
          </Box>
        </Center>
        <Text style={[styles.title, { paddingLeft: 10, marginTop: 20, marginBottom: 20 }]} >
          Contact Us
        </Text>
        <Center>
          <Box
            borderColor={COLORS.grey}
            marginTop={2}
            borderWidth={1}
            borderRadius={5}
            padding={4}
            backgroundColor={COLORS.white}
            width={SIZES.width - 20}
            shadow={5}
          >
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: SIZES.h5,
                  fontWeight: "500",
                  textAlign: "center",
                  color: COLORS.grey
                }} >
                Help & Support
              </Text>
            </TouchableOpacity>
          </Box>
          <Box
            borderColor={COLORS.grey}
            marginTop={2}
            borderWidth={1}
            borderRadius={5}
            padding={4}
            backgroundColor={COLORS.white}
            width={SIZES.width - 20}
            shadow={5}
          >
            <Text style={[styles.title, { color: COLORS.red }]} >Legal</Text>
            <VStack marginTop={4} space={3} >
              <Text
                style={{
                  fontSize: SIZES.h6,
                  fontWeight: "500",
                  color: COLORS.grey
                }}
              >Liceses</Text>
              <Text
                style={{
                  fontSize: SIZES.h6,
                  fontWeight: "500",
                  color: COLORS.grey
                }}
              >Privacy Policy</Text>
              <Text
                style={{
                  fontSize: SIZES.h6,
                  fontWeight: "500",
                  color: COLORS.grey
                }}
              >Terms of Service</Text>
            </VStack>
          </Box>
          <Box
            borderColor={COLORS.grey}
            marginTop={2}
            marginBottom={6}
            borderWidth={1}
            borderRadius={5}
            padding={4}
            backgroundColor={COLORS.white}
            width={SIZES.width - 20}
            shadow={5}
          >
            <TouchableOpacity
              onPress={()=>{
                navigation.navigate("Start"); 
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.h5,
                  fontWeight: "500",
                  textAlign: "center",
                  color: COLORS.black
                }} >
                Logout
              </Text>
            </TouchableOpacity>
          </Box>
        </Center>
      </ScrollView>
    </View>
  )
}

export default Setting