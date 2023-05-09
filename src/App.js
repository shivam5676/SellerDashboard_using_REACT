import { useState } from "react";
import AdminPanel from "./components/AdminPanel";
import "./App.css";
import DataOnScreen from "./components/DataOnScreen";

function App() {
  const [intialData, setIntialData] = useState("");
  const getdata = (datarecieved) => {
    setIntialData(datarecieved);

    console.log(intialData);
  };
  return (
    <div className="App">
      <AdminPanel submitForm={getdata}></AdminPanel>
      <DataOnScreen FormData={intialData}></DataOnScreen>
    </div>
  );
}

export default App;
