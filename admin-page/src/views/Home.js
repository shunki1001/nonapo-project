import React, { useState } from "react";

import DataTable from "./components/DataTable";

import LabelOnTable from "./components/LabelOnTable";
import HomeLayout from "../Layout/HomeLayout";
import CreateModal from "./components/CreateModal";

const Home = () => {
  const [newOpen, setNewOpen] = useState(false);
  return (
    <HomeLayout>
      <LabelOnTable setNewOpen={setNewOpen} />
      <DataTable />
      <CreateModal newOpen={newOpen} setNewOpen={setNewOpen} />
    </HomeLayout>
  );
};

export default Home;
