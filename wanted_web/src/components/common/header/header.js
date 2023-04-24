import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { popupRecoilState } from "../../../atoms/Popup";
import CategoryItem from "./categoryItem";
import SubCategoryItem from "./subcategoryItem";
import { mouseOverRecoilState } from "../../../atoms/MouseOver";
import { categoryTitleRecoilState } from "../../../atoms/CategoryTitle";
import { device } from "../../styled";

const categorys = [
  "개발",
  "경영·비즈니스",
  "디자인",
  "마케팅·광고",
  "영업",
  "고객서비스·리테일",
  "HR",
  "게임 제작",
  "미디어",
  "금융",
  "엔지니어링·설계",
  "물류·무역",
  "제조·생산",
  "의료·제약·바이오",
  "교육",
  "법률·법집행기관",
  "식·음료",
  "건설·시설",
  "공공·복지",
];

const a = [
  "개발 전체",
  "서버 개발자",
  "웹 개발자",
  "프론트엔드 개발자",
  "소프트웨어 엔지니어",
  "자바 개발자",
  "안드로이드 개발자",
  "iOS 개발자",
  "Node.js 개발자",
  "데이터 엔지니어",
  "파이썬 개발자",
  "C,C++ 개발자",
  "DevOps / 시스템 관리자",
  "시스템,네트워크 관리자",
  "머신러닝 엔지니어",
  "데이터 사이언티스트",
  "빅데이터 엔지니어",
  "개발 매니저",
  "기술지원",
  "QA,테스트 엔지니어",
  "보안 엔지니어",
  "프로덕트 매니저",
  "블록체인 플랫폼 엔지니어",
  "PHP 개발자",
  "임베디드 개발자",
  "웹 퍼블리셔",
  "하드웨어 엔지니어",
  "DBA",
  "크로스플랫폼 앱 개발자",
  ".NET 개발자",
  "영상,음성 엔지니어",
  "그래픽스 엔지니어",
  "CTO,Chief Technology Officer",
  "VR 엔지니어",
  "BI 엔지니어",
  "ERP전문가",
  "루비온레일즈 개발자",
  "CIO,Chief Information Officer",
];

const b = [
  "경영·비즈니스 전체",
  "서비스 기획자",
  "PM·PO",
  "사업개발·기획자",
  "전략 기획자",
  "경영지원",
  "운영 매니저",
  "회계·경리",
  "데이터 분석가",
  "총무",
  "자금담당",
  "해외 사업개발·기획자",
  "컨설턴트",
  "상품기획자(BM)",
  "조직관리",
  "오피스 관리",
  "사무보조",
  "구매담당",
  "정보보호 담당자",
  "경영 혁신가",
  "리스크 관리가",
  "비서",
  "ISMS(정보보호체계)",
  "지역 관리 매니저",
  "CFO,Chief Financial Officer",
  "세미나/포럼 기획자",
  "전시 기획자",
  "COO,Chief Operation Officer",
  "CSO,Chief Strategy Of Officer",
  "애자일코치",
  "지점장",
  "공연 기획자",
  "사내 심리상담가",
  "CEO,Chief Executive Officer",
  "안내원",
];

const c = [
  "디자인 전체",
  "UX 디자이너",
  "UI,GUI 디자이너",
  "웹 디자이너",
  "그래픽 디자이너",
  "모바일 디자이너",
  "BI/BX 디자이너",
  "광고 디자이너",
  "제품 디자이너",
  "영상,모션 디자이너",
  "3D 디자이너",
  "패키지 디자이너",
  "캐릭터 디자이너",
  "2D 디자이너",
  "일러스트레이터",
  "아트 디렉터",
  "공간 디자이너",
  "춢판, 편집 디자이너",
  "인테리어 디자이너",
  "패션 디자이너",
  "산업 디자이너",
  "VMD",
  "전시 디자이너",
  "조경 디자이너",
  "패브릭 디자이너",
  "가구 디자이너",
];

const d = [
  "마케팅·광고 전체",
  "마케터",
  "디지털 마케터",
  "콘텐츠 마케터",
  "퍼포먼스 마케터",
  "마케팅 전략 기획자",
  "브랜드 마케터",
  "광고 기획자(AE)",
  "글로벌 마케팅",
  "소셜 마케터",
  "그로스 해커",
  "모바일마케팅",
  "PR 전문가",
  "카피라이터",
  "마케팅 디렉터",
  "키워드광고",
  "제휴",
  "마켓 리서치",
  "BTL 마케터",
  "ATL 마케터",
  "CMO,Chief Marketing Officer",
  "CBO,Chief Brand Officer",
  "Sports 전문가",
];

const e = [
  "영업 전체",
  "기업영업",
  "외부영업",
  "영업 관리자",
  "기술영업",
  "주요고객사 담당자",
  "솔루션 컨설턴트",
  "해외영업",
  "고객성공매니저",
  "미디어 세일즈",
  "세일즈 엔지니어",
  "내부영업",
  "의료기기 영업",
  "제약영업",
];

const f = [
  "고객서비스·리테일 전체",
  "서비스 운영",
  "CS 매니저",
  "MD",
  "리테일 MD",
  "CS 어드바이저",
  "패션 MD",
  "CRM 전문가",
  "매장 관리자",
  "인바운드 텔레마케터",
  "가맹점 관리자",
  "매장점원",
  "아웃바운드 텔레마케터",
  "이벤트 기획자",
  "AS 기술자",
  "여행 에이전트",
  "비주얼머천다이저",
  "헬스케어매니저",
  "리셉션",
  "피부관리사",
  "헤어디자이너",
  "미용사",
  "승무원",
  "플로리스트",
  "애견미용사",
];

const g = [
  "HR 전체",
  "인사담당",
  "리크루터",
  "조직문화",
  "평가·보상",
  "HRD",
  "급여담당",
  "HRBP",
  "헤드헌터",
  "노무·노사",
  "HR 컨설턴트",
  "기술·교육",
  "사내강사",
  "E-러닝",
  "교사",
  "교수",
];

const h = [
  "게임 제작 전체",
  "게임 기획자",
  "게임 아티스트",
  "게임 클라이언트 개발자",
  "게임 그래픽 디자이너",
  "모바일 게임 개발자",
  "유니티 개발자",
  "게임 서버 개발자",
  "언리얼 개발자",
  "게임운영자(GM)",
];

const i = [
  "미디어 전체",
  "콘텐츠 크리에이터",
  "PD",
  "영상 편집가",
  "에디터",
  "비디오 제작",
  "연예,엔터테인먼트",
  "통·번역",
  "작가",
  "출판 기획자",
  "큐레이터",
  "라이센스 관리자",
  "저널리스트",
  "사진작가",
  "음향 엔지니어",
  "리포터",
];

export default function MainHeader() {
  const [popup, setPopup] = useRecoilState(popupRecoilState);
  const [title, setTitle] = useRecoilState(categoryTitleRecoilState);

  const [mouseover] = useRecoilState(mouseOverRecoilState);

  const [isOver, setIsOver] = useState(0);

  let width = "";
  let to = "";

  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleOver = () => {
    setTitle("직군 전체");
  };

  let list = [];

  switch (title) {
    case "직군 전체":
      width = "0";
      break;
    case "개발":
      list = a;
      width = "600px";
      to = "wdList";
      break;
    case "경영·비즈니스":
      list = b;
      width = "600px";
      to = "a";
      break;
    case "디자인":
      list = c;
      width = "600px";
      break;
    case "마케팅·광고":
      list = d;
      width = "600px";
      break;
    case "영업":
      width = "200px";
      list = e;
      break;
    case "고객서비스·리테일":
      list = f;
      width = "600px";
      break;
    case "HR":
      width = "200px";
      list = g;
      break;
    case "게임 제작":
      width = "200px";
      list = h;
      break;
    case "미디어":
      width = "200px";
      list = i;
      break;
    default:
      break;
  }

  return (
    <NavPageWrapper>
      <div className="mainBar">
        <nav className="mainBar-nav">
          <MainBarLeft>
            <div className="nav-logo">
              <button
                className="nav_category_btn"
                onMouseOver={() => setIsOver(1)}
              >
                <img
                  className="category_img"
                  alt="categoryimg"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
                ></img>
              </button>
              <Link to="/" className="icon-link">
                <img
                  alt="iconimg"
                  className="icon"
                  src="https://raw.githubusercontent.com/hanghae99-Wanted-Clone-Coding/Wanted-Client-Application/develop/src/assets/wanted-logo.png"
                ></img>
              </Link>
            </div>
          </MainBarLeft>
          <MainBarCenter>
            <li className="cartegoryList">
              <Link to="/jobsfeed" className="link">
                채용
              </Link>
            </li>
            <li className="cartegoryList">
              <Link to="/" className="link">
                이벤트
              </Link>
            </li>
            <li className="cartegoryList">
              <Link to="/" className="link">
                직군별 연봉
              </Link>
            </li>
            <li className="cartegoryList">
              <Link to="/cv" className="link">
                이력서
              </Link>
            </li>
            <li className="cartegoryList">
              <Link to="/community" className="link">
                커뮤니티
              </Link>
              <em>
                <svg width="18" height="11" viewBox="0 0 18 11">
                  <g fillRule="evenodd">
                    <text>
                      <tspan x="0" y="8">
                        New
                      </tspan>
                    </text>
                  </g>
                </svg>
              </em>
            </li>
            <li className="cartegoryList">
              <Link to="/" className="link">
                프리랜서
              </Link>
            </li>
            <li className="cartegoryList">
              <Link to="/" className="link">
                AI 합격예측
              </Link>
              <em>
                <svg width="18" height="11" viewBox="0 0 18 11">
                  <g fillRule="evenodd">
                    <text>
                      <tspan x="0" y="8">
                        Beta
                      </tspan>
                    </text>
                  </g>
                </svg>
              </em>
            </li>
          </MainBarCenter>
          <MainBarRight>
            <ul>
              <li>
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="#333"
                    fillRule="evenodd"
                  >
                    <path d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path>
                  </svg>
                </button>
              </li>
              <li>
                <button onClick={handlePopup}>회원가입/로그인</button>
              </li>
              <li id="forEmployers">
                <div className="division"></div>
                <Link to="/" className="forEmplyers-btn">
                  기업 서비스
                </Link>
              </li>
            </ul>
          </MainBarRight>
        </nav>
        <nav className="mainBar-nav-mobile">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <MainBarLeft>
              <div className="nav-logo">
                <button
                  className="nav_category_btn"
                  onMouseOver={() => setIsOver(1)}
                >
                  <img
                    className="category_img"
                    alt="categoryimg"
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
                  ></img>
                </button>
                <Link to="/" className="icon-link">
                  <img
                    alt="iconimg"
                    className="icon"
                    src="https://raw.githubusercontent.com/hanghae99-Wanted-Clone-Coding/Wanted-Client-Application/develop/src/assets/wanted-logo.png"
                  ></img>
                </Link>
              </div>
              <div className="registerBtn">회원가입하기</div>
            </MainBarLeft>
            <div
              style={{
                height: "50px",
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <MainBarCenter>
                  <li className="cartegoryList">
                    <Link
                      to="/jobsfeed"
                      className="link"
                      style={{ paddingLeft: "0" }}
                    >
                      홈
                    </Link>
                  </li>
                  <li className="cartegoryList">
                    <Link to="/jobsfeed" className="link">
                      채용
                    </Link>
                  </li>
                  <li className="cartegoryList ">
                    <Link to="/" className="link">
                      이벤트
                    </Link>
                  </li>
                  <li className="cartegoryList display">
                    <Link to="/" className="link">
                      직군별 연봉
                    </Link>
                  </li>
                  <li className="cartegoryList display">
                    <Link to="/cv" className="link">
                      이력서
                    </Link>
                  </li>
                  <li className="cartegoryList display">
                    <Link to="/community" className="link">
                      커뮤니티
                    </Link>
                    <em>
                      <svg width="18" height="11" viewBox="0 0 18 11">
                        <g fillRule="evenodd">
                          <text>
                            <tspan x="0" y="8">
                              New
                            </tspan>
                          </text>
                        </g>
                      </svg>
                    </em>
                  </li>
                  <li className="cartegoryList display">
                    <Link to="/" className="link">
                      프리랜서
                    </Link>
                  </li>
                  <li className="cartegoryList display">
                    <Link to="/" className="link">
                      AI 합격예측
                    </Link>
                    <em>
                      <svg width="18" height="11" viewBox="0 0 18 11">
                        <g fillRule="evenodd">
                          <text>
                            <tspan x="0" y="8">
                              Beta
                            </tspan>
                          </text>
                        </g>
                      </svg>
                    </em>
                  </li>
                </MainBarCenter>

                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <button>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#333"
                      fillRule="evenodd"
                    >
                      <path d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path>
                    </svg>
                  </button>
                  <button style={{ paddingLeft: "5px" }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#333"
                      fillRule="evenodd"
                    >
                      <path d="M12 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm7 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 19 10zM5 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 10z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {isOver ? (
          <OverLayCategory>
            <div>
              <nav
                className="category-container"
                onMouseOver={() => setIsOver(1)}
                onMouseOut={() => setIsOver(0)}
              >
                <section className="mainCategory">
                  <Link
                    to="/"
                    className="category-all"
                    onMouseOver={handleOver}
                  >
                    <em>
                      <h2>직군 전체</h2>
                    </em>
                  </Link>
                  <ul>
                    {categorys.map((list) => {
                      return (
                        <Link to={to}>
                          <CategoryItem name={list} to={to}></CategoryItem>
                        </Link>
                      );
                    })}

                    <li className="category-icon">
                      <Link to="/">
                        <div className="category-banner">
                          <span>프리랜서</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </section>

                {mouseover ? (
                  <section className="subCategory">
                    <ul style={(width = { width })}>
                      {list.map((l) => {
                        return <SubCategoryItem text={l}></SubCategoryItem>;
                      })}
                    </ul>
                  </section>
                ) : (
                  ""
                )}
              </nav>
            </div>
          </OverLayCategory>
        ) : (
          ""
        )}
      </div>
    </NavPageWrapper>
  );
}

const NavPageWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 /10%);
  z-index: 10;

  .mainBar {
    margin: 0 auto;
    height: 50px;
    position: relative;
    max-width: 1060px;
    width: 90%;
    @media all and ${device.medium} {
      height: 110px;
    }
  }
  .mainBar-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    @media all and ${device.medium} {
      display: none;
    }
  }
  .mainBar-nav-mobile {
    display: none;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    @media all and ${device.medium} {
      display: flex;
      width: 100%;
      padding: 15px 0;
    }
  }
`;
const MainBarLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-logo {
    display: flex;
    @media all and ${device.small} {
      height: 30px;
    }
  }
  .registerBtn {
    color: #36f;
    font-size: 14px;
    line-height: 32px;
    height: 34px;
    border: 1px solid #36f;
    padding: 0 14px;
    border-radius: 17px;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
  }
  .nav_category_btn {
    margin-top: 3px;
    margin-right: 15px;
  }
  .category_img {
    width: 17px;
    height: 14px;
    object-fit: contain;
  }
  .icon-link {
    margin-top: 3px;
  }
  .icon {
    height: 18px;
  }
`;
const MainBarCenter = styled.ul`
  margin: 0;
  list-style: none;
  flex: 1 1;

  .cartegoryList {
    display: inline-block;
    position: relative;
  }
  .display {
    display: inline-block;
    @media all and ${device.small} {
      display: none;
    }
  }
  .link {
    position: relative;
    vertical-align: middle;
    font-size: 13px;
    font-weight: 600;
    padding: 0 15px;
    cursor: pointer;
    text-decoration: none;
    color: #333;
    @media all and ${device.desktop} {
      font-size: 14px;
      padding: 15px;
    }
    @media all and ${device.medium} {
      padding: 11px 10px 19px;
    }
  }
  em {
    position: absolute;
    top: -3px;
    right: -5px;
  }
  g {
    font-size: 9px;
    font-weight: 500;
    fill: #36f;
  }
`;
const MainBarRight = styled.div`
  height: 100%;
  padding: 10px 0;

  ul {
    height: 100%;
    margin: 0;
  }
  li {
    position: relative;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  #forEmployers {
    display: inline-flex;
  }
  button {
    position: relative;
    margin-top: 5px;
    padding: 0 10px;
    height: 100%;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    margin: 0;
    border: 0;
    background: none;
    cursor: pointer;
  }
  .division {
    display: block;
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }
  .forEmplyers-btn {
    text-decoration: none;
    font-size: 13px;
    color: #666;
    line-height: 30px;
    height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    padding: 0 10px;
    margin-left: 15px;
    font-weight: 400;
    vertical-align: bottom;
  }
`;
const OverLayCategory = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
  overflow: hidden;
  width: 100%;

  .category-container {
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    display: flex;
    margin: 0 auto;
  }
  .mainCategory {
    border-left: 1px solid #f7f9fa;
    border-right: 1px solid #f7f9fa;
    height: calc(100vh - 50px);
    width: 220px;
    background-color: #fff;
    overflow-y: auto;
  }
  .category-all {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    flex: 1 1;
    padding: 0 20px;
  }
  .category-all > em {
    font-size: 13px;
    font-weight: 700;
    color: #333;
    text-ovverflow: ellipisis;
    overflow: hidden;
  }
  .category-icon {
    padding: 8px 20px;
    width: 100%;
    box-sizing: border-box;
  }
  .category-icon > a {
    display: block;
    background-color: #fff;
    align-items: center;
    flex: 1 1;
    padding: 0 18px 0 0;
  }
  .category-banner {
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    background: #f5f7ff
      url(https://image.wanted.co.kr/gigs/www/wanted/gigs_banner_background_img.png)
      no-repeat 100%;
    background-size: 160px 50px;
  }
  .category-banner > span {
    margin-left: 16px;
    font-weight: 700;
    font-size: 13px;
    color: #0a4ff4;
  }
  .subCategory {
    position: absolute;
    left: 202px;
    display: block;
  }
  .subCategory > ul {
    height: calc(100vh - 50px);
    width: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #f7f9fa;
  }
`;
