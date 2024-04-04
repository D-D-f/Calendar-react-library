import React from "react";
import ReactDOM from "react-dom/client";
import CalendarPicker from "./lib/CalendarPicker";

const handleDateSelect = (selectedDate) => {
  return selectedDate;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalendarPicker getDate={handleDateSelect} langage="fr" />
  </React.StrictMode>
);
