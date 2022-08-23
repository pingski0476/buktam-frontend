import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import {
  Box,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Thead,
  Tr,
  Td,
  Th,
  Button,
} from "@chakra-ui/react";
import Buktam from "../api/Buktam";

const Dashboard = () => {
  const [daftar, setDaftar] = useState([]);

  useEffect(() => {
    const getDaftar = async () => {
      try {
        const resDaftar = await Buktam.get("/buktam/");
        setDaftar(resDaftar.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDaftar();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Container borderWidth={"1px"} maxW={"85%"}>
        <Box maxW={"100%"} p={4} borderWidth={"1px"}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box borderWidth={"1px"} p={4}>
          <Heading fontSize={"xl"}>Daftar Pengunjung</Heading>

          <TableContainer>
            <Table variant={"simple"}>
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Nama</Th>
                  <Th>Jumlah Pengunjung</Th>
                  <Th>Profesi</Th>
                  <Th>Tanggal</Th>
                  <Th>Details</Th>
                </Tr>
              </Thead>
              <Tbody>
                {daftar.map((list, index) => {
                  let tanggal = new Date(list.waktu);

                  return (
                    <Tr>
                      <Td>{index + 1}</Td>
                      <Td>{list.nama}</Td>
                      <Td>{list.jumlah_pengunjung}</Td>
                      <Td>{list.profesi}</Td>
                      <Td>{tanggal.toLocaleDateString()}</Td>
                      <Td>
                        <Button colorScheme={"blue"}>Details</Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
