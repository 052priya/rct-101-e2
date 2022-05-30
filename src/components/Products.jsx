import { Flex, Grid } from "@chakra-ui/layout";
import React from "react";
import Product from "./Product";

const Products = ({data}) => {
 

  return (
    <Flex>
      {/*  AddProduct */}
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>{/* List of Products */}
      {data.map((e)=>{
        return <> <Product item={e}/> </>
      })}
      </Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;