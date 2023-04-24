import React, { useState } from "react";
import styled from "styled-components";
import FilterBtn from "./FilterBtn";
import { device } from "../styled";

export default function FilterList() {
  const [isSelect, setIsSelect] = useState(false);

  const handleSelect = () => {
    setIsSelect(!isSelect);
  };

  return (
    <FilterListWrapper>
      <div className="selectBtn">
        <FilterBtn title="지역" text="한국"></FilterBtn>

        <div className="filter yearFilter">
          <FilterBtn title="경력" text="전체"></FilterBtn>
        </div>
        <div className="filter skillsFilter">
          <FilterBtn title="기술스택"></FilterBtn>
        </div>
      </div>

      <div className="jobSortBtn">
        <div className="jobsort-selector">
          <button onClick={handleSelect}>
            <span>응답률순</span>
            <svg
              className={isSelect ? "selected" : ""}
              width="8"
              height="8"
              viewBox="0 0 8 7"
            >
              <path
                fill="#333"
                d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
              ></path>
            </svg>
          </button>
          {isSelect ? (
            <ul>
              <SelectLi title="최신순"></SelectLi>
              <SelectLi title="보상금순"></SelectLi>
              <SelectLi title="인기순"></SelectLi>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </FilterListWrapper>
  );
}
const SelectLi = (props) => {
  return (
    <SelectList>
      <button>{props.title}</button>
    </SelectList>
  );
};

const FilterListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media all and ${device.small} {
    margin-bottom: 20px;
  }

  .selectBtn {
    display: flex;
    align-items: center;
    flex: auto;
    justify-content: left;
    height: 40px;
  }

  .filter {
    position: relative;
    margin-left: 10px;
  }

  .jobSortBtn {
    display: block;
    width: 104px;
    height: 40px;
    position: relative;
    @media all and ${device.small} {
      display: none;
    }
  }
  .jobsort-selector > button {
    border-radius: 4px 4px 0 0;
    border: 1px solid #ececec;
    background-color: #fff;
    font-size: 14px;
    font-weight: 400;
    height: 40px;
    color: #000;
    padding: 0 16px;
    position: relative;
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: normal;
  }
  .jobsort-selector > button > span {
    margin-right: 8px;
  }
  .selected {
    transform: rotate(180deg);
    transition: 0.3s;
  }

  ul {
    z-index: 98;
    position: absolute;
    top: 39px;
    left: 0;
    right: 0;
    background: #fff;
    border: 1px solid #ececec;
    border-radius: 0 0 4px 4px;
  }
`;
const SelectList = styled.li`
  button {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 40px;
    color: #333;
    text-align: left;
    padding: 0 0 0 16px;
    border-bottom: 1px solid #ececec;
  }
`;
