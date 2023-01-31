import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Layout from "./layout";
import { extendTheme } from "@chakra-ui/react";

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Layout>{element}</Layout>
    </>
  );
};
