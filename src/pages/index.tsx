import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="div__first_page">
      <h1>Hello World!</h1>
      <button className="button__change_color_white">Mudar de cor</button>
    </div>
  );
};

export default Home;
