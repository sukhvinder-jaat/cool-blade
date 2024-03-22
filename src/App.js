import "./App.css";
import Hero from "./components/Hero";
import JoinOurCommunity from "./components/JoinOurCommunity";
import Usa from "./components/Usa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from "./components/common/BackToTop";
import { useEffect, useState } from "react";
import PreLoader from "./components/common/PreLoader";
import Problem from "./components/Problem";
import Team from "./components/Team";
import Footer from "./components/common/Footer";
function App() {
  const [loading, setLoading] = useState(true);
  // FOR FULL SCREEN LOADING
  // useEffect(() => {
  //   document.body.classList.add("not-scroll-before-loading");
  //   setTimeout(() => {
  //     setLoading(false);
  //     document.body.classList.remove("not-scroll-before-loading");
  //   }, 3000);
  // }, []);
  return (
    <>
      {" "}
      {/* {loading && <PreLoader />}
      {loading === false && <></>} <BackToTop /> */}
      <Hero />
      <Usa />
      <JoinOurCommunity />
      <Problem />
      <Team />
      <Footer />
    </>
  );
}

export default App;
