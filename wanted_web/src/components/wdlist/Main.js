import React, { useEffect, useState } from "react";
import styled from "styled-components";
import JobList from "./JobList";
import { device } from "../styled";

export default function WdListMain() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
      console.log(scroll);
    } else {
      setScroll(false);
    }
  };

  return (
    <MainPageWrapper>
      <JobList></JobList>
      <BottomBanner scroll={scroll}>
        <div className="wrapper">
          <div className="title">이제 밤새워 채용 공고 보지 마세요.</div>
          <div className="moreBtn">더 알아보기</div>
          <svg className="arrowBtn" viewBox="0 0 12 12">
            <path
              fill="#fff"
              d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"
            ></path>
          </svg>
        </div>
      </BottomBanner>
    </MainPageWrapper>
  );
}

const MainPageWrapper = styled.section`
  background-color: #fff;
`;
const BottomBanner = styled.div`
  z-index: 8;
  display: ${(props) => (props.scroll ? "flex" : "none")};
  width: 100%;
  justify-content: space-between;
  bottom: 0;
  position: fixed;
  background-color: #258bf7;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.05);
  height: 70px;
  @media all and ${device.small} {
    height: auto;
    padding: 10px 0;
    min-height: 50px;
  }
  .wrapper {
    max-width: 1060px;
    width: 87.72%;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and ${device.small} {
      margin: 0 20px;
      width: 100%;
    }
  }
  .title {
    text-align: left;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    @media all and ${device.small} {
      font-size: 14px;
      max-height: 38px;
      padding-bottom: 2px;
    }
  }
  .moreBtn {
    display: block;
    width: 118px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    background-color: #fff;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    color: #258bf7;
    @media all and ${device.small} {
      display: none;
    }
  }
  .arrowBtn {
    display: none;
    @media all and ${device.small} {
      display: block;
      width: 12px;
      height: 12px;
    }
  }
`;
