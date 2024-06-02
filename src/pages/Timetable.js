import { useSearchParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import instance from "../access/instance";
import { useEffect, useState, React } from "react";
const Timetable = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["csrftoken"]);
  const [userID, setUserId] = useState(null);
  const navigate = useNavigate();
  async function Click() {
    const response = await instance.post("/");
    console.log(response);
  }
  // const authCheck = () => {
  //   // 페이지에 들어올때 쿠키로 사용자 체크
  //   const token = cookies.id; // 쿠키에서 id 를 꺼내기
  //   axios
  //     .post("/users/loginCheck", { token: token }) // 토큰으로 서버에 인증 요청
  //     .then((res) => {
  //       setUserId(res.data.id); // 유저 아이디 표시를 위해 작성
  //     })
  //     .catch(() => {
  //       logOut(); // 에러 발생시 실행
  //     });
  // };
  // const logOut = () => {
  //   removeCookie("id"); // 쿠키를 삭제
  //   navigate("/"); // 메인 페이지로 이동
  // };
  // useEffect(() => {
  //   authCheck(); // 로그인 체크 함수
  // });
  return (
    <div>
      <button onClick={Click}>click</button>
    </div>
  );
};
export default Timetable;
