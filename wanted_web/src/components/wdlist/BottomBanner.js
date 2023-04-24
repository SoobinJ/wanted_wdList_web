import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "../styled";

export default function BottomBanner(){
    return(
        <BannerWrapper>
            <SectionWrapper className="banner">
                <div className="banner-text">
                    <span>이제 밤새워 채용 공고 보지 마세요.</span>
                </div>
                <div className="bannerBtn-wrapper">
                    <span>더 알아보기</span>
                </div>
            </SectionWrapper>
        </BannerWrapper>
    )
}

const BannerWrapper=styled.button`
    bottom:0;
    position:fixed;
    width:100%;
    background-color:#258bf7;
    transition:.5s;
    box-shadow: 0 -2px 5px 0 rgb(0 0 0 / 5%);
    z-index:2;
    height:70px;
    .banner{
        position:relative;
    }
    .banner-text{
        padding:6px 0;
        float:left;
    }
    .banner-text>span{
        text-align:left;
        color:#fff;
        font-size:20px;
        font-weight:400;
        display:inline-block;
        vertical-align:middle;
    }
    .bannerBtn-wrapper{
        float:right;
        width:118px;
        height:40px;
        line-height:40px;
        border-radius:5px;
        background-color:#fff;
        color:#258bf7;
        font-size:15px;
        font-weight:600;
        text-align:center;
    }
`