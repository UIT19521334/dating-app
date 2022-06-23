import { View, Text } from 'react-native'
import React from 'react'

const MatchDetail = ({navigation,route}) => {
    const [value, onChangeText] = React.useState(route.params.title);
    const [girl, setGirl] = React.useState(route.params.girl);
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: value === '' ? 'No title' : value,
        });
      }, [navigation, value]);
  return (
    <View>
      <Text>MatchDetail</Text>
    </View>
  )
}

export default MatchDetail