import React from "react";
import styled from "styled-components";
import MoreBtn from "../common/MoreBtn";
import { SectionWrapper, device } from "../styled";

export default function JobListNav() {
  return (
    <NavWrapper>
      <SectionWrapper className="nav-body">
        <div>
          <button className="jobGroup-btn">
            <span className="btn-text">경영·비즈니스</span>
            <MoreBtn></MoreBtn>
          </button>
        </div>

        <div className="job-category">
          <div className="divider">|</div>
          <button className="category-btn">
            <span className="btn-text category-text">경영·비즈니스 전체</span>
            <MoreBtn></MoreBtn>
          </button>
        </div>
      </SectionWrapper>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  background: #fff;
  padding-top: 40px;

  .nav-body {
    position: relative;
    display: flex;
    align-items: center;
    @media all and ${device.small} {
      margin-left: 20px;
    }
  }
  .jobGroup-btn {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
  .btn-text {
    padding-top: 3px;
    margin-right: 15.5px;
    font-size: 24px;
    line-height: 29px;
    font-weight: 700;
    color: #333;
    @media all and ${device.small} {
      max-width: 120px;
      font-size: 16px;
      padding-top: 1px;
      margin-right: 9.5px;
      width: 100%;
      line-height: 19.2px;
    }
  }

  .divider {
    font-size: 28px;
    line-height: 29px;
    padding: 3px 24px 0;
    color: #ececec;
    @media all and ${device.small} {
      font-size: 20px;
      line-height: 22px;
      padding: 3px 14px;
    }
  }

  .job-category {
    display: flex;
    overflow: hidden;
  }
  .category-btn {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .category-text {
    font-weight: 400;
    @media all and ${device.small} {
      font-size: 13px;
      margin-right: 10px;
      line-height: 16px;
    }
  }
`;
