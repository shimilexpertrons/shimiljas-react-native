import React, { memo} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {createBox, createText,useTheme} from '@shopify/restyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Box = createBox();
const Text = createText();

const Header=()=>{
    return (
        <Box
         width={'100%'}
         height={70}
         justifyContent={"center"}
         flexDirection="row"
         alignItems={'center'}
         padding="p"
         >
             <Box flex={8} justifyContent={"center"}>
               <Text variant="storeHeader">UPayment Store</Text>
             </Box>
             <Box flex={2} justifyContent={"center"} alignItems="flex-end">
                 <FontAwesome name="search" size={20} />
             </Box>
        </Box>
    )
}
export default Header 