import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import styles from "../stylesheet/users.module.css"
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { colData } from "../mock/index";
import axios from "axios";
import { BASE_URL } from "../constant";
import { Loader } from "./Loader";
import { dataContext } from "../context/dataContext";


export default function Users() {
  const {user,token,allUser,setAllUser} = useContext(dataContext)
    const [columnDefs, setcolumnDefs] = useState(colData);

    const defaultColDef = useMemo(
      () => ({
        sortable: true,
        filter: true,
        resizable: true,
      }),
      []
    );

    const handleRow = useCallback((e) => {
      if(e.data.Name==="Vijay Gupta"){
        console.log(e.data);
      }
    });

    let config = {
      headers: {
        Authorization: "Bearer " + token || localStorage.getItem("token"),
      },
    };

useEffect(() => {
  return () => {
    function fetchUsers() {
      axios(`${BASE_URL}auth/alluser`,config).then((res) =>
        res.data.data?.map((elm) =>
          setAllUser((prev) => new Set([
            ...prev,
            {
              Id: elm._id,
              Name: elm.name,
              Email: elm.email,
              Delete: `Delete`,
              View: "View CV",
            },
          ]))
        )
      )
    }
fetchUsers()
  }
}, [])


if(!allUser){
  return <Loader/>
}
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>All User List</h1>
          <div
            className="ag-theme-alpine"
            style={{ height: 400, maxWidth: 1000 }}
          >
            <AgGridReact
              onCellClicked={handleRow}
              defaultColDef={defaultColDef}
              rowData={allUser}
              columnDefs={columnDefs}
              animateRows={true}
            />
          </div>
        </div>
      </div>
    );
  }