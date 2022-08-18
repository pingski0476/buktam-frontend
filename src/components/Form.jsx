import React from "react";
import {
  Container,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Buktam from "../api/Buktam";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const postForm = await Buktam.post("/buktam/", data);
    } catch (error) {
      console.log(error.message);
      console.log(error.response);
      console.log(error.request);
    }
  };

  return (
    <Container
      maxW={"100%"}
      h={"auto"}
      py={"3em"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Heading mb={"1em"} fontFamily={"Poppins"}>
        Buku Tamu PPID Pustaka
      </Heading>
      <Box
        bgColor={"gray.100"}
        boxSize={"md"}
        rounded={"lg"}
        shadow={"lg"}
        px={"2em"}
        height={"auto"}
        py={"3em"}
      >
        <form method="post" onSubmit={handleSubmit(submitHandler)}>
          <FormControl>
            <FormLabel fontWeight={"semibold"}>Nama</FormLabel>
            <Input
              type={"text"}
              placeholder={"Masukkan nama anda . . . "}
              bgColor={"white"}
              name={"nama"}
              {...register("nama")}
            />
          </FormControl>
          <FormControl mt={"1em"}>
            <FormLabel fontWeight={"semibold"}>Jumlah Pengunjung</FormLabel>
            <NumberInput defaultValue={1} min={1} max={200}>
              <NumberInputField
                bgColor={"white"}
                name={"jumlah_pengunjung"}
                {...register("jumlah_pengunjung")}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl mt={"1em"}>
            <FormLabel fontWeight={"semibold"}>Asal</FormLabel>
            <Input
              type={"text"}
              placeholder={"Masukkan asal daerah/instansi anda . . ."}
              bgColor={"white"}
              name={"asal"}
              {...register("asal")}
            />
          </FormControl>
          <FormControl mt={"1em"}>
            <FormLabel fontWeight={"semibold"}>Profesi</FormLabel>
            <Select
              placeholder="Pilih pekerjaan"
              bgColor={"white"}
              name={"profesi"}
              {...register("profesi")}
            >
              <option value={"peneliti"}>Peneliti</option>
              <option value={"penyuluh"}>Penyuluh</option>
              <option value={"asn"}>ASN</option>
              <option value={"dosen"}>Dosen</option>
              <option value={"guru"}>Guru</option>
              <option value={"mahasiswa"}>Mahasiswa</option>
              <option value={"pelajar"}>Pelajar</option>
              <option value={"swasta"}>Swasta</option>
              <option value={"umum"}>Umum</option>
              <option value={"petani"}>Petani</option>
            </Select>
          </FormControl>
          <FormControl mt={"1em"}>
            <FormLabel fontWeight={"semibold"}>Kepentingan</FormLabel>
            <Textarea
              type={"text"}
              placeholder={"Masukkan kepentingan anda . . ."}
              bgColor={"white"}
              name={"kepentingan"}
              {...register("kepentingan")}
            />
          </FormControl>
          <FormControl mt={"1em"}>
            <FormLabel fontWeight={"semibold"}>Usia</FormLabel>
            <Select
              bgColor={"white"}
              placeholder="Pilih Usia"
              name={"usia"}
              {...register("usia")}
            >
              <option value={"15-35"}>15-35 Tahun</option>
              <option value={"36-45"}>36-45 Tahun</option>
              <option value={"46-65"}>46-65 Tahun</option>
              <option value={">65"}> diatas 65 Tahun</option>
            </Select>
          </FormControl>
          <FormControl mt={"1em"}>
            <FormLabel>Bagian Dituju</FormLabel>
            <Input
              type={"text"}
              placeholder={"Masukkan bagian yang anda tuju . . . "}
              bgColor={"white"}
              name={"bagian_dituju"}
              {...register("bagian_dituju")}
            />
          </FormControl>
          <FormControl mt={"1em"}>
            <FormLabel>Personal Dituju</FormLabel>
            <Input
              type={"text"}
              placeholder={"Masukkan nama personal yang anda tuju . . . "}
              bgColor={"white"}
              name={"personal_dituju"}
              {...register("personal_dituju")}
            />
          </FormControl>
          <Button
            type="submit"
            mt={"1.5em"}
            colorScheme={"whatsapp"}
            w={"100%"}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
