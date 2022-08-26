import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, ScrollView, FlatList} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import FloatButton from '../components/FloatButton';
import CategoryItem from '../components/CategoryItem';
import ProductItem from '../components/ProductItem';
import Header from '../components/Header'
import {categorires, products} from '../dummydata';
import {AnimatedFlatList} from 'flatlist-intro-animations';
const Box = createBox();
const Text = createText();
const HomePage = () => {
  const [category, setCategories] = useState('');
  return (
    <>
      <Box
        flex={1}
        justifyContent="center"
        backgroundColor="mainBackground"
        >
        <Header/>
        <Box flex={1} padding={'p'}>
        <Box height={50}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 7}}>
            {categorires.map(item => (
              <CategoryItem
                selected={category == item}
                item={item}
                onPress={() => setCategories(item)}
              />
            ))}
          </ScrollView>
        </Box>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          style={styles.flatlist}
          contentContainerStyle={{alignItems: 'center'}}
          numColumns={2}
          renderItem={({item}) => <ProductItem selected item={item} />}
        />
        </Box>
      </Box>
      <FloatButton />
    </>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    marginTop: 4,
    paddingHorizontal: 4,
  },
});
export default HomePage;
