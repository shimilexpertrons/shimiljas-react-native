import React from 'react';
import {createBox, createText} from '@shopify/restyle';
const Box = createBox();
const Text = createText();
const AddProduct = () => {
  return (
    <Box
      flex={1}
      justifyContent="center"
      backgroundColor="mainBackground"
      padding="s">
      <Text variant="header" textAlign="center">
        AddProduct
      </Text>
    </Box>
  );
};
export default AddProduct;
