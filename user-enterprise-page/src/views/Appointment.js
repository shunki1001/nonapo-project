import React, { useContext, useEffect, useState } from "react";
import HomeLayout from "../Layout/HomeLayout";

import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { DataContext } from "../contexts/DataContext";

const stateString = ["商談済み", "成約", "検討中", "商談希望あり"];
const columns = [
  { field: "date", headerName: "商談日" },
  {
    field: "enterprise",
    headerName: "会社名",
    sortable: false,
  },
  {
    field: "selectedAccount",
    headerName: "担当者名",
    sortable: false,
  },
  {
    field: "phone",
    headerName: "電話番号",
    sortable: false,
  },
  {
    field: "email",
    headerName: "Eメール",
    sortable: false,
  },
  {
    field: "address",
    headerName: "住所",
    sortable: false,
  },
  {
    field: "fromUrl",
    headerName: "流入サイト",
    sortable: false,
  },
  {
    field: "state",
    headerName: "状態",
    sortable: false,
  },
  {
    field: "account2",
    headerName: "商談対応者",
    sortable: false,
  },
];

const Appointment = () => {
  const { enterprise } = useContext(DataContext);
  const [dataList, setDataList] = useState([]);

  const rows = dataList.map((item) => {
    let todayTimestamp = new Date(item.date.seconds * 1000);
    return {
      id: item.id,
      date: `${todayTimestamp.getYear() + 2000 - 100}/${
        todayTimestamp.getMonth() + 1
      }/${todayTimestamp.getDate()}`,
      enterprise: item.enterprise,
      selectedAccount: item.selectedAccount,
      phone: item.phone,
      email: item.email,
      address: item.address,
      fromUrl: item.fromUrl,
      state: stateString[item.state - 1],
    };
  });

  useEffect(() => {
    const q = query(
      collection(db, "appointment"),
      where("enterpriseId", "==", localStorage.getItem("id"))
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const dataTemp = [];
      let temp = {};
      querySnapshot.forEach((doc) => {
        temp = doc.data();
        temp.id = doc.id;
        dataTemp.push(temp);
      });
      setDataList(dataTemp);
    });
    return () => unsubscribe();
  }, [enterprise]);

  useEffect(() => {
    console.log(rows);
  }, [rows]);
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
