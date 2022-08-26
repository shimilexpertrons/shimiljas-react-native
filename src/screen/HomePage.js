import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import FloatButton from '../components/FloatButton';
import CategoryItem from '../components/CategoryItem';
import ProductItem from '../components/ProductItem';
import Header from '../components/Header';
import {categorires, products} from '../dummydata';
import {AnimatedFlatList} from 'flatlist-intro-animations';
import {fetchCategories} from '../reducer/categoryReducer';

import {useSelector, useDispatch} from 'react-redux';

const Box = createBox();
const Text = createText();
const HomePage = () => {
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const categoriresData = useSelector(state => state?.categorires);
  const categoriresDataStatus = useSelector(
    state => state?.categorires?.status,
  );
  useEffect(() => {
    if (categoriresDataStatus == 'idle') {
      dispatch(fetchCategories());
    }
  }, [categoriresDataStatus, dispatch]);

  if (categoriresDataStatus == 'loading') {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color="#000000" />
      </Box>
    );
  }
  if (categoriresDataStatus == 'failed') {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="text">Something went wrong !!</Text>
      </Box>
    );
  }

  return (
    <>
      <Box flex={1} justifyContent="center" backgroundColor="mainBackground">
        <Header />
        <Box flex={1} padding={'p'}>
          <Box height={50}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 7}}>
              {categoriresData.data.map((item, index) => (
                <CategoryItem
                  key={index}
                  selected={category == item}
                  item={item?.title}
                  onPress={() => setCategory(item)}
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
