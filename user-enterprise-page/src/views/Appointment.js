import React from "react";
import HomeLayout from "../Layout/HomeLayout";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  TableSortLabel,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date", headerName: "商談日", width: 150 },
  {
    field: "enterprise",
    headerName: "会社名",
    sortable: false,
    width: 150,
  },
  {
    field: "account1",
    headerName: "担当者名",
    sortable: false,
    width: 150,
  },
  {
    field: "phone",
    headerName: "電話番号",
    sortable: false,
    width: 150,
  },
  {
    field: "email",
    headerName: "Eメール",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "address",
    headerName: "住所",
    sortable: false,
    width: 150,
  },
  {
    field: "fromUrl",
    headerName: "流入サイト",
    sortable: false,
    width: 150,
  },
  {
    field: "state",
    headerName: "状態",
    sortable: false,
    width: 150,
  },
  {
    field: "account2",
    headerName: "商談対応者",
    sortable: false,
    width: 150,
  },
];
const rows = [
  { id: "000001", date: "2020 / 2 / 22", account2: "テスト太郎" },
  { id: "000002", date: "2021 / 2 / 22", account2: "テスト太郎" },
  { id: "000003", date: "2022 / 2 / 22", account2: "テスト太郎" },
];

const Appointment = () => {
  const handleCsvExport = () => {
    alert("CSVエクスポートボタン");
  };
  return (
    <HomeLayout title="アポイント管理">
      <Box sx={{ height: "100vh", width: "1400px", bgcolor: "#ffffff" }}>
        <Box sx={{ width: "100%", textAlign: "right" }}>
          <Button
            variant="outlined"
            onClick={handleCsvExport}
            sx={{ mx: 2, my: 1 }}
          >
            CSVエクスポート
          </Button>
        </Box>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          rowHeight={80}
          sx={{
            border: "none",
            p: 2,
            color: "#000000",
            "& .MuiDataGrid-columnHeaders": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              border: "none",
            },
            "& .MuiDataGrid-row": {
              border: "1px solid #B1B1B1",
              borderRadius: "5px",
              width: "1360px",
              my: 1,
            },
          }}
        />
      </Box>
    </HomeLayout>
  );
};

export default Appointment;
