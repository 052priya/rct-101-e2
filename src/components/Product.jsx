import { Image } from "@chakra-ui/image";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { Tag, TagLabel } from "@chakra-ui/tag";
import React from "react";

const Product = ({item}) => {
 
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={item.imageSrc} />
      <Text data-cy="product-category">{item.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{item.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{item.title}</Heading>
      <Box data-cy="product-price">{item.price}</Box>
    </Stack>
  );
};

export default Product;