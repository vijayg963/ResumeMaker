import React, { useContext } from "react";
import { Loader } from "../../../components/Loader";
import { Details } from "../../../components/templateOne/Details";
import { Technology } from "../../../components/templateOne/Technology";
import { dataContext } from "../../../context/dataContext";

export default function Cvone() {
  const { data } = useContext(dataContext);

  if (!data) {
    return <Loader />;
  }
  return (
    <div>
      <div className="flex app">
        <Details {...data} />
        <Technology {...data} />
      </div>
    </div>
  );
}
