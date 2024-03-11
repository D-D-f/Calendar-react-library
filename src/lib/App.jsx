import ContainerTable from "./ContainerTable.jsx";
import ActiveContextProvider from "./ActiveContext.js";
import React from "react";

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
