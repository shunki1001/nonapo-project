import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { deleteDoc, doc } from "firebase/firestore";
import React, { useContext } from "react";
import { db } from "../../firebase";
import { DataContext } from "../../contexts/DataContext";

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

const DataTable = (props) => {
  const { setNewOpen, setNewData } = props;
  const { dataList } = useContext(DataContext);

  const handleEditButton = (data) => {
    setNewData(data);
    console.log(data);
    setNewOpen(true);
  };
  const handleDeleteButton = async (id) => {
    try {
      await deleteDoc(doc(db, "enterprise", id));
    } catch {
      console.log("通信エラー");
    }
  };

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
        <TableBody>
          {dataList.map((data) => {
            return (
              <TableRow key={data.id}>
                <TableCell>{data.enterprise}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.address}</TableCell>
                <TableCell>{data.subscriptionCost}</TableCell>
                <TableCell>{data.numberOfAccount}</TableCell>
                <TableCell>{data.numberOfSite}</TableCell>
                <TableCell>
                  {data.subscriptionStartYear}年{data.subscriptionStartMonth}
                  月～
                  {data.subscriptionDuration}
                  ヶ月間
                </TableCell>
                <TableCell>{data.isAgreement ? "契約中" : "解約中"}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditButton(data)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteButton(data.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
