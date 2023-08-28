import React, { useContext, useEffect } from "react";
import styles from "../stylesheet/users.module.css";
import axios from "axios";
import { BASE_URL } from "../constant";
import { Loader } from "./Loader";
import { dataContext } from "../context/dataContext";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin3Fill, RiFileEditFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";

export default function Resumes() {
  const { user, allCv, setAllCv, setData } = useContext(dataContext);
  const navegate = useNavigate();
  const header = ["Name", "Post", "Preview", "Edit", "Delete"];
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  async function fetchData() {
    try {
      const res = await axios.get(`${BASE_URL}api/getpdf/${user._id}`, config);
      if (res.status !== 200) {
        throw new Error("API response was not successful");
      }
      setAllCv(res.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = ({ _id }) => {
    let url = `${BASE_URL}api/deletPdf/${_id}`;
    axios
      .delete(url, config)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("API response was not successful");
        }
        fetchData();
        alert("Resume Delete Successfully");
      })
      .catch((err) => console.error(err));
  };

  const handleRow = (obj) => {
    let activeData = allCv.filter((x) => x._id === obj._id);
    setData(activeData[0]);
    navegate("/template");
  };

  const handleEdit = (obj) => {
    let activeData = allCv.filter((x) => x._id === obj._id);
    setData(activeData[0]);
    navegate("/updateCv");
  };

  if (!allCv) {
    return <Loader />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>All Resume List ...</h1>
        <div className={styles.tableBox}>
          <table>
            <thead>
              <tr>
                {header.map((elm, i) => (
                  <th key={i}>{elm}</th>
                ))}
              </tr>
            </thead>
            {allCv?.map((obj, i) => (
              <tbody key={i}>
                <tr>
                  <td width={"200px"}>{obj.name}</td>
                  <td width={"250px"}>{obj.post}</td>
                  <td
                    onClick={() => handleRow(obj)}
                    width={"100px"}
                    className="viewCv"
                  >
                    <FaEye />
                  </td>
                  <td
                    onClick={() => handleEdit(obj)}
                    width={"100px"}
                    className="deleteCv"
                  >
                    <RiFileEditFill />
                  </td>
                  <td
                    onClick={() => handleDelete(obj)}
                    width={"100px"}
                    className="deleteCv"
                  >
                    <RiDeleteBin3Fill />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
