import Footer from "../components/shared/footer/Footer";
import Counter from '../components/counter/counter';
import Theme from '../components/Theme/Theme';
import MainNav from "../components/guest/header/MainNav";

function Home() {
  return (
    <>
      <Theme />
      <MainNav/>
      <h1>Home</h1>
      <Counter />
      <Footer/>
    </>
  );
}

export default Home;
