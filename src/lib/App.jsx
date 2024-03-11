import ContainerTable from "../lib/Component/ContainerTable/ContainerTable.jsx";
import ActiveContextProvider from "./Context/ActiveContext.jsx";
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
