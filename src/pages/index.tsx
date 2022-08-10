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
      <div className="container">
        <div className="contend">
          <div className="div__left">
            <img
              src="https://www.alanaraujo.eng.br/static/media/image002.5f3f8cb5.png"
              alt=""
            />
            <h1>
              Faça seu login <br /> na plataforma
            </h1>
          </div>
          <div className="div__right">
            <form action="#">
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <a href="#">Esqueci minha senha</a>
              <button>Entrar</button>
              <p>
                Não tem uma conta? <a href="#">Registre-se</a>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
