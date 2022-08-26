import React from 'react'
import {   createBox, createText,} from '@shopify/restyle';
const Box = createBox();
const Text = createText();
const ProductDetail=()=>{
    return(
        <Box
            flex={1}
            justifyContent="center"
            backgroundColor="mainBackground"
            padding="s">
             <Text variant="header" textAlign="center">
              ProductDetail
            </Text>
        </Box>
    )
}
export default ProductDetail