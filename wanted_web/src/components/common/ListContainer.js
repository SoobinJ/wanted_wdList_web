import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import lists from "../wdlist/db/jobList.json";
import { device } from "../styled";

export default function ListContainer() {
  const render = () => {
    const result = [];
    for (let i = 0; i < lists.length / 4 + 1; i++) {
      result.push(<ListUl key={i}>{renderItems(i)}</ListUl>);
    }
    return result;
  };

  const renderItems = (props) => {
    const result = [];
    let isBanner = false;
    let k;
    if (props > 3) {
      props = props - 1;
      k = props * 4;
    } else {
      if (props === 3) {
        isBanner = true;
      }
      k = props * 4;
    }
    for (; k < props * 4 + 4; k++) {
      if (isBanner) {
        result.push(<Banner></Banner>);
        break;
      } else {
        result.push(
          <ListItem
            key={k}
            id={lists[k].name}
            position={lists[k].position}
            name={lists[k].name}
            location={lists[k].location}
            reward={lists[k].reward}
            url={lists[k].url}
            response={lists[k].response}
          ></ListItem>
        );
      }
    }
    return result;
  };
  return <>{render()}</>;
}

const Banner = () => {
  return (
    <BannnerContainer>
      <div className="title">유형과 가장 어울리는 회사는?</div>
      <div className="test">
        유형테스트 하러가기
        <span>
          <svg viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
          </svg>
        </span>
      </div>
    </BannnerContainer>
  );
};

const BannnerContainer = styled.div`
  background: #0d99ff;
  cursor: pointer;
  margin: 35px 0 50px;
  border-radius: 10px;
  padding: 29px 0 22px 120px;
  background-image: url(https://static.wanted.co.kr/images/type-test/typetest-banner-image.png);
  background-size: auto 100%;
  background-position: 100%;
  background-repeat: no-repeat;
  margin: 35px 10px 50px;
  color: #fff;
  @media all and ${device.medium} {
    padding: 28px 0 22px 28px;
    background-position: right -130px top 0;
  }
  @media all and ${device.small} {
    margin-top: 12px;
    margin-bottom: 22px;
    border-radius: 4px;
    padding: 22px 20px 14px;
    background-image: url(https://static.wanted.co.kr/images/type-test/typetest-mobile-banner-image.png);
    background-position: 100%;
  }
  .title {
    font-weight: 800;
    font-size: 22px;
    lint-height: 26px;
    @media all and ${device.small} {
      font-size: 16px;
      line-height: 19px;
      font-weight: 700;
    }
  }
  .test {
    display: flex;
    align-items: center;
    font-weight: 600;
    height: 32px;
    font-size: 16px;
    @media all and ${device.small} {
      font-size: 14px;
      line-height: 142.9%;
    }
  }
  span {
    width: 16px;
    height: 16px;
    margin-left: 4px;
    margin-top: -2px;
  }
  svg {
    fill: #fff;
    width: 1rem;
    height: 1rem;
  }
`;

const ListItem = (props) => {
  const imgstyle = {
    backgroundImage: `url(${props.url})`,
  };

  return (
    <Item>
      <div>
        <Link to="/">
          <header className="card-img" style={imgstyle}>
            <button className="bookmarkBtn">
              <svg fill="none" width="24" height="24" viewBox="0 0 18 18">
                <path
                  fill="#fff"
                  d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                ></path>
                <path
                  fillOpacity="0.5"
                  fill="black"
                  d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                ></path>
              </svg>
            </button>
          </header>
          <div className="card-body">
            <div className="card-position">{props.position}</div>
            <div className="card-name">{props.name}</div>
            <PlusInfo response={props.response} />
            <div className="card-location">{props.location}</div>
            <div className="card-reward">{props.reward}</div>
          </div>
        </Link>
      </div>
    </Item>
  );
};

const Item = styled.li`
  width: 25%;
  padding: 10px;
  display: inline-block;
  vertical-align: top;
  @media all and ${device.medium} {
    width: 50%;
  }

  .card-img {
    padding-bottom: 75%;
    position: relative;
    background-size: cover;
    background-position: 50%;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0/10%);
  }
  .bookmarkBtn {
    background: none;
    padding: 8px 6px;
    width: 42px;
    height: 42px;
    top: 0;
    right: 0;
    flex-direction: row;
    z-index: 1;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 3px;
    position: absolute;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    display: flex;
  }

  .card-body {
    padding: 14px 0;
  }
  .card-position {
    text-overflow: ellipsis;
    position: relative;
    color: #333;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.2;
    max-height: 2.4em;
    overflow: hidden;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
  .card-name {
    font-size: 14px;
    color: #333;
    font-weight: 600;
    text-align: left;
    width: 100%;
    text-overflow: ellipsis;
    margin-top: 10px;
    overflow: hidden;
  }
  .card-location {
    font-weight: 400;
    color: #999;
    text-align: left;
    width: 100%;
    text-overflow: ellipsis;
    margin-top: 10px;
    overflow: hidden;
    font-size: 14px;
  }
  .card-reward {
    margin-top: 10px;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const ListUl = styled.ul`
  padding: 0;
  margin: -10px;
`;

const PlusInfo = (props) => {
  return (
    <PlusInfoContainer response={props.response}>
      <button>
        <div className="info-body">
          <span>응답률이 매우 높음</span>
        </div>
      </button>
    </PlusInfoContainer>
  );
};

const PlusInfoContainer = styled.div`
  display: ${(props) => (props.response ? "block" : "none")};
  position: relative;
  button {
    position: relative;
  }
  .info-body {
    border: 1px solid #00aead;
    color: #00aead;
    border-radius: 2px;
    background-color: #fff;
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    height: 19px;
    line-height: 19px;
    margin-top: 4px;
    padding: 0 5px;
  }
  .info-body > span {
    position: relative;
    line-height: 19px;
    top: -1px;
  }
`;
