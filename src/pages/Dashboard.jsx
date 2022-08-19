import React, { useEffect } from "react";
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
} from "@chakra-ui/react";
import Buktam from "../api/Buktam";

const Dashboard = () => {
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
                  <Td>No</Td>
                  <Td>Nama</Td>
                  <Td>Jumlah</Td>
                  <Td>Profesi</Td>
                  <Td>Tanggal</Td>
                  <Td>Details</Td>
                </Tr>
              </Thead>
              <Tbody></Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
