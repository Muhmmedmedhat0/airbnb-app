import Footer from "../components/shared/footer/Footer";
import Theme from "../components/Theme/Theme";
import MainNav from "../components/guest/header/MainNav";
import FilterNav from "../components/guest/header/FilterNav";
import Login from "../components/shared/login/Login";
import { useState } from "react";
import Cards from "../components/guest/home/Cards";
import style from "../styles/home.module.scss";
import Link from "next/link";

function Home() {
  return (
    <>
      <header className={`fixed-top ${style.homeNavs}`}>
        <MainNav />
        <FilterNav />
      </header>
      <main className={style.homeContent}>
        {/* <Link ></Link> */}
        <Cards />
       </main>
      <Footer />
    </>
  );
}

export default Home;
