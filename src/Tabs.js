import { useState } from "react";
import styles from "./Tabs.module.css";

export const Tabs = ({ tabs }) => {
  const [isFruitsDataAvailable, setIsFruitsDataAvailable] = useState(false);
  const [isVegDataAvailable, setIsVegDataAvailable] = useState(false);

  const tabsHandler = (event) => {
    const id = event.target.id;

    if (id === "Fruits") {
      setIsFruitsDataAvailable(true);
    } else {
      setIsVegDataAvailable(true);
    }
  };

  return (
    <div className={styles["tabs-container"]}>
      {tabs.map((tab) => {
        const values = tab.values;
        return (
          <div>
            <button id={tab.key} onClick={tabsHandler}>
              {tab.key}
            </button>
            {((tab.key === "Fruits" && isFruitsDataAvailable) ||
              (tab.key === "Vegetables" && isVegDataAvailable)) &&
              values.map((value) => {
                return <div>{value}</div>;
              })}
          </div>
        );
      })}
    </div>
  );
};
