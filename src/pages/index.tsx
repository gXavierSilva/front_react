import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [name, setName] = useState<string>();
  function changeName() {
    setName("Xavier");
  }
  function clearName() {
    setName("");
  }

  // const name: string = "Xavier";
  return (
    <div className="div__first_page">
      <h1>Hello World! {name} </h1>
      <button
        onBlur={clearName}
        onClick={changeName}
        className="button__change_color_white"
      >
        Mudar de cor
      </button>
    </div>
  );
};

export default Home;
