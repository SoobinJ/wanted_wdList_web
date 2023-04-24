import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { popupRecoilState } from "../../atoms/Popup";

export default function FilterBtn(props) {
  const [popup, setPopup] = useRecoilState(popupRecoilState);

  const handlePopup = () => {
    setPopup(!popup);
  };

  return (
    <FilterBtnWrapper onClick={handlePopup}>
      <span className="filterBtn-title">
        {props.title}
        {props.title === "지역" ? <span>1</span> : ""}
      </span>
      <span className="filterBtn-text">{props.text}</span>
      {props.title === "지역" ? (
        ""
      ) : (
        <svg width="8" height="8" viewBox="0 0 8 7">
          <path
            fill="#333"
            d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
          ></path>
        </svg>
      )}
    </FilterBtnWrapper>
  );
}

const FilterBtnWrapper = styled.button`
  align-items: center;
  display: inline-flex;
  height: 40px;
  padding: 0 15px;
  margin-bottom: 0;
  border-radius: 5px;
  position: relative;
  border: 1px solid #ececec;
  background: #fff;
  color: #333;
  font-size: 13px;
  font-weight: 400;

  .filterBtn-title {
    margin-right: 15px;
    font-size: 14px;
    font-weight: 400;
    color: #333;
  }
  .filterBtn-title > span {
    position: absolute;
    top: 4px;
    right: 0;
    transform: translate(50%, -50%);
    background-color: #36f;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-left: 7px;
  }
  .filterBtn-text {
    color: #36f;
    font-weight: 600;
    margin-right: 0;
    font-size: 14px;
  }
  svg {
    margin-left: 8px;
    transition: 0.3s;
  }
`;
