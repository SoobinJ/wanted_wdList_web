import React from "react";
import styled from "styled-components";
import { device } from "../styled";

export default function MoreBtn() {
  return (
    <MoreBtnWrapper>
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path>
      </svg>
    </MoreBtnWrapper>
  );
}

const MoreBtnWrapper = styled.span`
  position: relative;
  border: 1px solid #e1e2e3;
  border-radius: 999px;
  background-color: #fff;
  height: 26px;
  width: 26px;
  transition: 0.3s;
  flex-shrink: 0;
  svg {
    margin-top: 7px;
    color: rgb(118, 118, 118);
  }
  @media all and ${device.small} {
    width: 20px;
    height: 20px;
    svg {
      margin-top: 5px;
      width: 9px;
      height: 9px;
    }
  }
`;
