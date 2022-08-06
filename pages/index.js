import Footer from "../components/shared/footer/Footer";
import Counter from "../components/counter/counter";
import Theme from "../components/Theme/Theme";
import MainNav from "../components/guest/header/MainNav";
import FilterNav from "../components/guest/header/FilterNav";
import Login from "../components/shared/login/Login";
import { useState } from "react";
import Cards from "../components/guest/home/Cards";
import style from "../styles/home.module.scss";

function Home() {
  return (
    <>
      <header className={`fixed-top ${style.homeNavs}`}>
        <MainNav />
        <FilterNav />
      </header>
      <main className={style.homeContent}>
        <Cards />
       </main>
      <Footer />
    </>
  );
}

export default Home;
