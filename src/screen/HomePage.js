import React, {useState} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {useNavigation} from '@react-navigation/native';
import FloatButton from '../components/FloatButton';
import CategoryItem from '../components/CategoryItem';
import {categorires} from '../dummydata';
const Box = createBox();
const Text = createText();
const HomePage = () => {
  const navigation = useNavigation();
  const [category, setCategories] = useState('');
  return (
    <>
      <Box
        flex={1}
        justifyContent="center"
        backgroundColor="mainBackground"
        padding="s">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10,padding:5}}>
          {categorires.map(item => (
            <CategoryItem
              selected={category==item}
              item={item}
              onPress={() => setCategories(item)}
            />
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductDetail');
          }}>
          <Text variant="header" textAlign="center">
            Home Page
          </Text>
        </TouchableOpacity>
      </Box>
      <FloatButton onPress={() => navigation.navigate('AddProduct')} />
    </>
  );
};
export default HomePage;
