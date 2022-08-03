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
  const [popupBtn, setPopupBtn] = useState(false);

  return (
    <>
      <header className={`fixed-top ${style.homeNavs}`}>
        <MainNav />
        <FilterNav />
      </header>
      <main className={style.homeContent}>
        <Cards />
        <Theme />
        <input
          style={{ margin: "10%" }}
          type={"button"}
          value="login"
          onClick={() => setPopupBtn(true)}
        />
        <Login trigger={popupBtn} setTrigger={setPopupBtn} />
      </main>
      {/* <Counter /> */}
      <Footer />
    </>
  );
}

export default Home;
