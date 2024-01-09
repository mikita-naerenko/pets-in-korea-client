import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SHELTERS, PROVINCES } from "@/lib/shelters";
import Box from "@mui/material/Box";

export default function TableBodyComp({
  filteredShelters,
}: {
  filteredShelters: {
    district: string;
    name: string;
    phone: string;
    address: string;
    provinces: string;
  }[];
}) {
  return (
    <TableBody>
      {filteredShelters.map((row, i) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={i}>
            <TableCell>{row.district}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.phone}</TableCell>
            <TableCell>{row.address}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
