import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function TableHeadComp() {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: 700 }}>Город/Район</TableCell>
        <TableCell align="center" sx={{ fontWeight: 700 }}>
          Название Приюта
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 700 }}>
          Телефон
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 700 }}>
          Адрес
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
