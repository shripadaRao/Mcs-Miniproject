import React, { useEffect, useState } from "react";
import axios from "axios";

function Disp() {
  // const url = "https://shripadrao.pythonanywhere.com/";
  // const [Data, setData] = useState(null);

  // useEffect(() => {
  //   // axios.get(url).then((response) => {
  //   //   setData(response.data);
  //   // });
  //   axios({
  //     method: "get",
  //     headers: { "Content-Type": "application/json" },
  //     url: url,
  //   }).then((response) => {
  //     setData(response.data);
  //   });
  // }, [url]);

  //PUT BELOW BLOCK IN ASYNC FUNCTION. IT WILL WORK!!
  //   let reqData = String(Data);
  //   let reqData_ = reqData.slice(115, -2);

  // if (Data) {
  //   // on successful result.
  return (
    <div>
      <h4>Text displaying on Ardiuno is : {DisplayFromAPI()}</h4>
    </div>
  );
  //}
  //return <div>loading... or it ain't working</div>;
}

function DisplayFromAPI() {
  const url = "https://shripadrao.pythonanywhere.com/";
  const [Data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      headers: { "Content-Type": "application/json" },
      url: url,
    }).then((response) => {
      setData(response.data);
    });
  }, [url]);

  //PUT BELOW BLOCK IN ASYNC FUNCTION. IT WILL WORK!!
  //   let reqData = String(Data);
  //   let reqData_ = reqData.slice(115, -2);
  //const dataValues = Object.values(Data);
  if (Data) {
    // on successful result.
    return { Data };
  }
  return <div>loading... or it ain't working</div>;
}
export default Disp;
