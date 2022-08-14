import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import { Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW={"100%"} px={0} fontFamily={"Poppins"}>
      <Navbar />
      <Form />
      <Footer />
    </Container>
  );
};

export default Home;
