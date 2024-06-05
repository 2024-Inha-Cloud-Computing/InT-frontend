import back from "../../assets/img/back.png";
import find from "../../assets/img/find.png";
import "./FirstFiltering.css";
const FirstFiltering = () => {
  return (
    <div className="first_filtering_container">
      <img src={back} className="goback" />
      <div className="first_filtering_main">
        <span>이번 학기에 꼭 수강해야하는</span>
        <span>과목을 알려주세요!</span>
      </div>
      <div className="first_filtering_line"></div>
      <div className="first_filtering_result">
        <span className="first_filtering_result_default">
          아직 아무 과목도 선택하지 않았어요!
        </span>
      </div>
      <div className="first_filtering_search">
        <input
          type="text"
          placeholder="학과명, 과목명, 학수번호를 입력하세요."
          className="first_filtering_input"
        ></input>
        <img src={find} className="first_filtering_find" />
      </div>
      <div className="first_filtering_cross">
        <span className="first_filtering_cross_span">전체 과목</span>
        <div className="first_filtering_cross_line"></div>
      </div>
      <div className="total_course">
        <div>컴퓨터공학과, 컴퓨터구조론, CS201</div>
        <div>컴퓨터공학과, 컴퓨터구조론, CS201</div>
        <div>컴퓨터공학과, 컴퓨터구조론, CS201</div>
        <div>컴퓨터공학과, 컴퓨터구조론, CS201</div>
        <div>컴퓨터공학과, 컴퓨터구조론, CS201</div>
        <div>컴퓨터공학과, 컴퓨터구조론, CS201</div>
        <div>컴퓨터공학과, 컴퓨터구조론, CS201</div>
      </div>
    </div>
  );
};

export default FirstFiltering;
