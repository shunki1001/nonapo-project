import React from "react";
import NameInput from "./inputComponent/NameInput";
import ProfileInput from "./inputComponent/ProfileInput";

const LeftColumn = () => {
  return (
    <>
      <ProfileInput />
      <NameInput />
    </>
  );
};

export default LeftColumn;
