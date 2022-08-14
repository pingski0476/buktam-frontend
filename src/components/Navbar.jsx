import React from "react";
import { Box, Button, Flex, VStack, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo-kementan.png";

const Navbar = () => {
  return (
    <Flex maxW={"100%"} bgColor={"green.400"} justifyContent={"space-between"}>
      <HStack px={"0.5em"} py={"0.3em"} spacing={0.5}>
        <Image src={logo} boxSize={"60px"} />
        <VStack
          spacing={0}
          align={"flex-start"}
          fontWeight="bold"
          fontSize={"lg"}
          textColor={"whiteAlpha.900"}
        >
          <Box>Pusat Perpustakaan dan</Box>
          <Box>Penyebaran Teknologi Pertanian</Box>
        </VStack>
      </HStack>

      <HStack px={"0.8em"} spacing={"1em"}>
        <Button variant={"ghost"}>Home</Button>
        <Button variant={"ghost"}>IKM</Button>
        <Button variant={"ghost"}>Survey</Button>
      </HStack>
    </Flex>
  );
};
export default Navbar;
