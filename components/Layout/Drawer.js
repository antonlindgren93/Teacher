import React from "react";
import { useState } from "react/cjs/react.development";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

const ProfileDrawer = () => {
  const [show, setShow] = useState(false);

  const openDrawer = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button onClick={openDrawer} style={{ color: "#fff" }}>
        Anton
      </button>
      
    </div>
  );
};

export default ProfileDrawer;
