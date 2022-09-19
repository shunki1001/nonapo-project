import React, { useContext, useEffect, useState } from "react";
import HomeLayout from "../Layout/HomeLayout";

import { Box, createTheme, ThemeProvider } from "@mui/material";
import { DataGrid, GridToolbarExport } from "@mui/x-data-grid";
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { DataContext } from "../contexts/DataContext";
import { jaJP } from "../styles/customJaJp";

import clsx from "clsx";

const theme = createTheme({}, jaJP);

const stateString = ["商談済み", "成約", "検討中", "商談希望連絡あり"];
const columns = [
  { field: "date", headerName: "商談日", width: "150" },
  {
    field: "enterprise",
    headerName: "会社名",
    sortable: false,
    width: "200",
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
    width: "150",
  },
  {
    field: "email",
    headerName: "Eメール",
    sortable: false,
    width: "150",
  },
  {
    field: "address",
    headerName: "住所",
    sortable: false,
    width: "200",
  },
  {
    field: "fromUrl",
    headerName: "流入サイト",
    sortable: false,
    width: "200",
    renderCell: (cellValues) => {
      return (
        <>
          {cellValues.value.url}
          <br />
          {cellValues.value.title}
        </>
      );
    },
  },
  {
    field: "state",
    headerName: "状態",
    sortable: false,
    type: "singleSelect",
    valueOptions: stateString,
    editable: true,
    width: "150",
    cellClassName: (params) => {
      if (params.value == null) {
        return "";
      }
      return clsx("cell-state", {
        state1: params.value === stateString[0],
        state2: params.value === stateString[1],
        state3: params.value === stateString[2],
        state4: params.value === stateString[3],
      });
    },
  },
  {
    field: "concierge",
    headerName: "商談対応者",
    sortable: false,
    editable: true,
    width: "150",
  },
];

const Appointment = () => {
  const { enterprise, setNewNotice } = useContext(DataContext);
  const [dataList, setDataList] = useState([]);

  const rows = dataList.map((item) => {
    let todayTimestamp = new Date(item.date.seconds * 1000);
    return {
      id: item.id,
      date: `${todayTimestamp.getYear() + 2000 - 100}/${
        todayTimestamp.getMonth() + 1
      }/${todayTimestamp.getDate()} ${todayTimestamp.getHours()}:${todayTimestamp.getMinutes()}`,
      enterprise: item.enterprise,
      selectedAccount: item.selectedAccount,
      phone: item.phone,
      email: item.email,
      address: item.address,
      fromUrl: { title: item.title, url: item.fromUrl },
      state: stateString[item.state - 1],
      concierge: item.concierge,
    };
  });

  // Update
  const processRowUpdate = async (newRow, oldRow) => {
    // console.log(newRow);
    // console.log(oldRow);
    const updateData = {
      state: stateString.indexOf(newRow.state) + 1,
      concierge: newRow.concierge,
    };
    await updateDoc(doc(db, "appointment", newRow.id), updateData);
    return { ...newRow };
  };

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
    console.log(dataList);
    try {
      dataList.forEach((item) => {
        updateDoc(doc(db, "appointment", item.id), {
          isChecked: true,
        });
      });
      setNewNotice(false);
    } catch (error) {
      console.log(error);
    }
  }, [dataList]);

  return (
    <HomeLayout title="アポイント管理">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height: "80vh",
            width: "1550px",
            maxWidth: "100%",
            bgcolor: "#ffffff",
            boxShadow: "0px 3px 6px 0px #00000029",
            "& .cell-state.state1 div": {
              color: "#2D92FE",
              background: "#E8FDFF",
              padding: "1px 0.5em",
              borderRadius: "10px",
            },
            "& .cell-state.state2 div": {
              color: "#1DBC9C",
              background: "#D9FEC7",
              padding: "1px 0.5em",
              borderRadius: "10px",
            },
            "& .cell-state.state3 div": {
              color: "#C97F00",
              background: "#FFF5A5",
              padding: "1px 0.5em",
              borderRadius: "10px",
            },
            "& .cell-state.state4 div": {
              color: "#fff",
              background: "#FF5555",
              padding: "1px 0.5em",
              borderRadius: "10px",
            },
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            rowHeight={80}
            processRowUpdate={(newRow, oldRow) =>
              processRowUpdate(newRow, oldRow)
            }
            onProcessRowUpdateError={(error) => console.log(error)}
            sx={{
              border: "none",
              p: 2,
              color: "#000000",
              "& .MuiDataGrid-columnHeaders": {
                border: "none",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: 700,
              },
              "& .MuiDataGrid-columnSeparator": {
                display: "none",
              },
              "& .MuiDataGrid-cell": {
                border: "none",
              },
              "& .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
                {
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  overflow: "auto",
                },
              "& .MuiDataGrid-cell:nth-child(8)": { color: "red" },
              "& .MuiDataGrid-row": {
                border: "1px solid #B1B1B1",
                borderRadius: "5px",
                width: "1450px",
                my: 1,
              },
            }}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </Box>
      </ThemeProvider>
    </HomeLayout>
  );
};
function CustomToolbar() {
  return (
    <Box sx={{ textAlign: "right", width: "100%" }}>
      <GridToolbarExport
        csvOptions={{ utf8WithBom: true }}
        startIcon=""
        variant="outlined"
      />
    </Box>
  );
}

export default Appointment;
