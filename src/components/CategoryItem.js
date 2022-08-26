import React, { memo} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {createBox, createText,useTheme} from '@shopify/restyle';

const Box = createBox();
const Text = createText();

const CategoryItem=({item,onPress,selected})=>{
    return (
        <TouchableOpacity onPress={onPress}>
          <Box
            justifyContent="center"
            backgroundColor={selected?"cardPrimaryBackground":"text"}
            alignItems="center"
            borderRadius={12}
            height={40}
            marginRight='s'
            shadowRadius={3}
            shadowColor={"text"}
            shadowOffset={{width: -2, height: 5}}
            padding="s">
            <Text variant={selected?"textblack":"text"} textAlign="center">
                {item}
            </Text>
         </Box>
       </TouchableOpacity>
    )

}
export default CategoryItem