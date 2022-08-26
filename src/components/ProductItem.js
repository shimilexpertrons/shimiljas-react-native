import React, {memo} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {createBox, createText, useTheme} from '@shopify/restyle';

const Box = createBox();
const Text = createText();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
      <Box
        justifyContent="center"
        backgroundColor={'cardPrimaryBackground'}
        alignItems="center"
        borderRadius={12}
        shadowRadius={3}
        width={windowWidth / 2 - 25}
        height={windowHeight / 3}
        margin={'s'}
        shadowColor={'text'}
        elevation={3}
        overflow="hidden"
        alignSelf="center"
        shadowOffset={{width: 2, height: 5}}>
        <Box
          flex={8}
          justifyContent="center"
          alignItems="center"
          backgroundColor="cardPrimaryBackground">
          <Image
            source={{uri: item?.Avatar}}
            style={{width: windowWidth / 2 - 25, height: 100}}
            resizeMode={'contain'}
          />
        </Box>
        <Box
          width={'100%'}
          padding={'s'}
          flex={2}
          borderBottomLeftRadius={12}
          borderBottomRightRadius={12}
          backgroundColor="text">
          <Text variant="text">{item?.Name}</Text>
          <Text variant="text" marginTop="vs">{item?.Price}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
export default ProductItem;
