import React from "react";
import ContainerTable from "./ContainerTable.jsx";
import ActiveContextProvider from "./ActiveContext.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ActiveContextProvider>
        <ContainerTable />
      </ActiveContextProvider>
    </div>
  );
};

export default App;
