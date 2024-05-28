import "../css/Home.css";
import logo from "../assets/img/InT.png";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <button className="login-button">로그인</button>
        <p>아직 회원이 아니신가요?</p>
        <button className="signup-button">회원가입</button>
      </header>
    </div>
  );
};

export default Home;
