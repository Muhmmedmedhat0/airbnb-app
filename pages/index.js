import Footer from "../components/shared/footer/Footer";
import Counter from "../components/counter/counter";
import Theme from "../components/Theme/Theme";
import MainNav from "../components/guest/header/MainNav";
import FilterNav from "../components/guest/header/FilterNav";

function Home() {
  return (
    <>
      <header className="fixed-top">
        <MainNav />
        <FilterNav />
      </header>
      {/* <h1>Home</h1> */}
      {/* <Theme /> */}

      {/* <Counter /> */}
      <Footer />
    </>
  );
}

export default Home;
