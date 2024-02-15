import * as React from "react";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

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
            <TableCell itemProp="name">{row.name}</TableCell>
            <TableCell itemProp="telephone">{row.phone}</TableCell>
            <TableCell itemProp="address">{row.address}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
