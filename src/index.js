import React from "react";
import ReactDOM from "react-dom";

import ItemCardGroup from "./components/ItemCardGroup";

import "./styles.css";

import Search from "./components/Search";
import useCoffeeData from "./hooks/useCoffeeData";

function App() {
  const { data, isLoading, error, setFilter } = useCoffeeData();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {error ? (
        <span>Oh no. An error occurred. {error}</span>
      ) : isLoading ? (
        <span>Loading</span>
      ) : (
        <>
          <Search onEnter={filter => setFilter(filter)} />
          <ItemCardGroup data={data} onAddToCart={console.log} />
        </>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
