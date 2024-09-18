'use client';

import { useEffect } from "react";
import "../../public/css/BoucingBox.css";
import { startBouncingBox } from "../../public/js/BoucingBox";

const BouncingBox = () => {
  useEffect(() => {
    startBouncingBox();
  }, []);

  return (
    <>
      <div className="box"><img src="../favicon.ico" alt="" /></div>
    </>
  );
};

export default BouncingBox;
