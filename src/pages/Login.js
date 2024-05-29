import logo from "../assets/img/InT.png";
import back from "../assets/img/back.png";
import "../css/Login.css";

const Login = () => {
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  const goBack = () => {
    window.location.href = "/";
  };
  const login = (event) => {
    event.preventDefault();
    window.location.href = "/timetable";
  };
  const findId = () => {
    window.location.href = "/findId";
  };
  const findPassword = () => {
    window.location.href = "/findPw";
  };
  const goSingup = () => {
    window.location.href = "/signup";
  };
  return (
    <div className="loginPage">
      <img src={back} className="goback" onClick={goBack} />
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <form>
        <input type="text" placeholder="아이디 입력" />
        <input type="password" placeholder="비밀번호 입력" />
        <input type="button" value="로그인" onClick={login} />
      </form>
      <div className="options">
        <span onClick={findId}>아이디 찾기</span>
        <div className="slash"></div>
        <span onClick={findPassword}>비밀번호 찾기</span>
        <div className="slash"></div>
        <span onClick={goSingup}>회원가입</span>
      </div>
    </div>
  );
};

export default Login;
