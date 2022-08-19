import React from "react";
import { VStack, Flex, Text, Image } from "@chakra-ui/react";
import logo from "../assets/logo-kementan.png";
import { FiHome } from "react-icons/fi";

const SideBar = () => {
  return (
    <VStack
      spacing={3}
      bgColor={"green.500"}
      w={"100%"}
      maxW={"15%"}
      h={"100vh"}
      textColor={"white"}
      justifyContent={"flex-start"}
      py={"0.5em"}
      pos={"sticky"}
      left={0}
      px={"0.5em"}
    >
      <Flex>
        <Image src={logo} boxSize={"60px"} />
      </Flex>
      <Flex>
        <Text fontFamily={"poppins"} fontWeight={"bold"}>
          Dashboard
        </Text>
      </Flex>
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        cursor={"pointer"}
        _hover={{
          bg: "whiteAlpha.800",
          color: "black",
        }}
        p={4}
        mx={4}
        borderRadius={"md"}
        w={"80%"}
      >
        <FiHome />
        Home
      </Flex>
    </VStack>
  );
};

export default SideBar;
