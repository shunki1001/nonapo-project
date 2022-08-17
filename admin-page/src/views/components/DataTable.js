import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const dataLabel = [
  "企業名",
  "メール",
  "住所",
  "月額利用料",
  "アカウント数",
  "サイト数",
  "契約期間",
  "ステータス",
  "操作",
];

const DataTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="data-table">
        <TableHead>
          <TableRow>
            {dataLabel.map((label) => {
              return <TableCell key={label}>{label}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
