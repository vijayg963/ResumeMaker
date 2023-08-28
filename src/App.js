import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BASE_URL } from "../src/constant";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateCV from "./pages/createCv";
import { config, initialState } from "./mock";
import { dataContext } from "./context/dataContext";
import NotFound from "./pages/error";
import { Template } from "./pages/Template";
import Cv from "./pages/Cv";
import Updatecv from "./pages/updateCv";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [data, setData] = useState(initialState);
  const [allCv, setAllCv] = useState(null);
  const [allUser, setAllUser] = useState("");
  const [activeTemplate, setActiveTemplate] = useState(1);

  const url = `${BASE_URL}auth/verify?token=${localStorage.getItem("token") || token}`;

  useEffect(() => {
    if (token) {
      async function fetchData() {
        try {
          const res = await axios.get(url, config);
          if (res.status !== 200) {
            throw new Error("API response was not successful");
          }
          setUser(res.data.data.user);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }
  }, []);

  return (
    <div className="container">
      <dataContext.Provider
        value={{
          data,
          token,
          user,
          allCv,
          allUser,
          activeTemplate,
          setActiveTemplate,
          setData,
          setUser,
          setToken,
          setAllCv,
          setAllUser,
        }}
      >
        <Routes>
          <Route
            exact
            path="/"
            element={token ? <Navigate to="/app" /> : <Login />}
          />
          <Route path="/app" element={token ? <Home /> : <Navigate to="/" />} />
          <Route
            path="/createCV"
            element={user ? <CreateCV /> : <Navigate to="/" />}
          />
          <Route path="/cv"
          element={user ? <Cv /> : <Navigate to="/" />} />
          <Route
            path="/template"
            element={user ? <Template /> : <Navigate to="/" />}
          />
          <Route
            path="/updateCv"
            element={user ? <Updatecv /> : <Navigate to="/" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </dataContext.Provider>
    </div>
  );
}

export default App;
