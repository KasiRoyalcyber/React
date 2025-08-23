import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Body from "./components/Body";
import MyCode from "./components/MyCode";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <MyCode />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
