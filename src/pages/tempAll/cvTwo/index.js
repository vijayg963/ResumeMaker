import React, { useContext } from "react";
import { Loader } from "../../../components/Loader";
import { Temptwo } from "../../../components/templateTwo";
import { dataContext } from "../../../context/dataContext";

export default function Cvtwo() {
  const { data } = useContext(dataContext);

  if (!data) {
    return <Loader />;
  }
  return (
    <div>
      <div className="app">
        <Temptwo />
      </div>
    </div>
  );
}
