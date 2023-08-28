import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { dataContext } from "../../context/dataContext";
import { Footer } from "../../components/Footer";
import Cvone from "../tempAll/cvOne";
import Cvtwo from "../tempAll/cvTwo";
import Cvthree from "../tempAll/cvThree";
import Cvfour from "../tempAll/cvFour";

export default function Cv() {
  const { user, data, activeTemplate } = useContext(dataContext);
  const [loading, setloading] = useState(true);

  function print() {
    window.print();
  }

  const downloadPdf = () => {
    setloading(false);
    setTimeout(print, 500);
    setTimeout(() => setloading(true), 2500);
  };

  if (!data || !user) {
    return <Loader />;
  }
  return (
    <div>
      <div className="cvDownload">
        {loading && (
          <div className="flexBetween">
            <button onClick={downloadPdf}>Download</button>
            <Link to="/app">
              <button>Home</button>
            </Link>
          </div>
        )}
      </div>
      <div>
        {activeTemplate === 1 ? (
          <Cvone />
        ) : activeTemplate === 2 ? (
          <Cvtwo />
        ) : activeTemplate === 3 ? (
          <Cvthree />
        ) : activeTemplate === 4 ? (
          <Cvfour />
        ) : (
          ""
        )}
      </div>
      <div>{data.isLogo && <Footer />}</div>
    </div>
  );
}
