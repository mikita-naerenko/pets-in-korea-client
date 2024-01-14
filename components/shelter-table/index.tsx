"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { SHELTERS } from "@/lib/shelters";
import Box from "@mui/material/Box";
import TableBodyComp from "./table-body";
import TableHeadComp from "./table-head";
import SelectComp from "./select";
import Container from "@mui/material/Container";

export default function ShelterTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [city, setCity] = React.useState("");

  // const uniqueArray = SHELTERS.reduce((accumulator, currentValue) => {
  //   const existingShelter = accumulator.find(
  //     (shelter) => shelter.phone === currentValue.phone
  //   );

  //   if (!existingShelter) {
  //     accumulator.push(currentValue);
  //   }

  //   return accumulator;
  // }, []);

  const filteredShelters = city
    ? SHELTERS.filter((item) => item.provinces === city).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      )
    : SHELTERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Container disableGutters>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Box display={"flex"} justifyContent={"end"} flexWrap={"wrap"} py={2}>
          <SelectComp city={city} setCity={setCity} />
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={SHELTERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage="Показанно строк:"
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} всего ${count}`
            }
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>

        <TableContainer sx={{ maxHeight: 650 }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <caption itemProp="name">Приюты для животных в Южной Корее</caption>
            <TableHeadComp />
            <TableBodyComp filteredShelters={filteredShelters} />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredShelters.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage="Показанно строк:"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} всего ${count}`
          }
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
