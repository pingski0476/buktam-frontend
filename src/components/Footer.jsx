import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <Flex
      justifyContent={"center"}
      maxW={"100%"}
      borderWidth={"1px"}
      py={"0.5em"}
    >
      <Box display={"flex"}>
        Copyright© <Text fontWeight={"semibold"}>Pustaka {year}</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
