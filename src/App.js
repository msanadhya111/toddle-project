import React from "react";
import Toddle from "./components/Toddle";
import { Tabs } from "./Tabs";

function App() {
  const tabs = [
    {
      key: "Fruits",
      values: ["Mango", "Apple", "Banana"],
    },
    {
      key: "Vegetables",
      values: ["Tomato", "Potato", "Lady Finger"],
    },
  ];

  return (
    <React.Fragment>
      {/* <Toddle /> */}
      <Tabs tabs={tabs} />
    </React.Fragment>
  );
}

export default App;
