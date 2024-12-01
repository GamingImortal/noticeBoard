import { useState } from "react";
import "./App.css";
import HeadBody from "./Components/views/Featured/HeadBody";
import Header from "./Components/views/Header/Header";
import Posts from "./Components/views/Posts/Posts";
import usBookSearch from "./usBookSearch";
import { produce } from "immer";
import TextInputDisplay from "./Components/views/TextInputDisplay";

function App() {
  return (
    <>
      <div className=" md:px-8 lg:px16 lx:px-32 2xl:px-64">
        {/*navbar**/}
        <Header />
        {/*featured posts*/}
        <HeadBody />
        {/*expandableRext*/}
        {/*posts*/}
        <Posts />
      </div>
    </>
  );
}

export default App;
