import "../css/Home.css";
import logo from "../assets/img/InT.png";
import { Link } from "react-router-dom";

const Home = () => {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  function goToLoginPage() {
    window.location.href = "/login";
  }
  function goToJoinPage() {
    window.location.href = "/join";
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <button className="login-button" onClick={goToLoginPage}>
          로그인
        </button>
        <div className="information">
          <div className="line"></div>
          <p>아직 회원이 아니신가요?</p>
          <div className="line"></div>
        </div>
        <button className="signup-button" onClick={goToJoinPage}>
          회원가입
        </button>
      </header>
    </div>
  );
};

export default Home;
