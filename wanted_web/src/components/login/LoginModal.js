import React, { useState } from "react";
import styled from 'styled-components';
import {useRecoilState} from "recoil";
import { popupRecoilState } from "../../atoms/Popup";
import SocialBtn from "./SocialBtn";
import CloseBtn from "./CloseBtn";
import { AgreementWrapper, InputStyle } from "./styled";

export default function LoginModal(){
    const [popup,setPopup]=useRecoilState(popupRecoilState);
    const [isJoin,setIsJoin]=useState(false);
    const [selected,setSelected]=useState("대한민국 +82");

    const selectedList=[
        {
            num:"+82",
            con:"South Korea",
        },
        {
            num:"+81",
            con:"Japan"
        },
        {
            num:"+852",
            con:"Hong Kong"
        },
        {
            num:"+65",
            con:"Singapore"
        },
        {
            num:"+93",
            con:"Afghanistan"
        },
        {
            num:"+355",
            con:"Albania"
        }
    ]

    const [phone,setPhone]=useState('');
    const [phoneValid,setPhoneValid]=useState("0");
    const [isClick,setIsClick]=useState(false);

    const [email,setEmail]=useState('');
    const [emailValid,setEmailValid]=useState("0");

    const [password,setPassword]=useState('');
    const [passwordValid,setPasswordValid]=useState("0");

    const [testPw,setTestPw]=useState('');

    const [testValid,setTestValid]=useState('0');

    const handleJoin=()=>{
        
        const regex=
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if(regex.test(email)){
            setEmailValid("1");
            setIsJoin(!isJoin);
        }else{
            setEmailValid('2');
        }
    }

    const handleSelect=(e)=>{
        const value=e.target.value;
        const con=selectedList.filter((list)=>list.num===value);
        const contry=con[0].con;

        switch(value){
            case "+82":
                setSelected("대한민국 +82");
                break;
            default:
                setSelected(contry+" "+value);
                break;
        }
        
    }


    const handlePhone=(e)=>{
        setPhone(e.target.value);
        
        const regex =/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/

        if (regex.test(phone)) {
            setPhoneValid("1");
            
        }
        else{
            setPhoneValid("2");
        }
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value);
        const regex=
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if(regex.test(email)){
            setEmailValid("1");
        }else{
            setEmailValid('0');
        }

    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);

        const regex=
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

        if(regex.test(password)){
            setPasswordValid('1');
            
        }else{
            setPasswordValid('2');
        }
    }

    const handleTestPw=(e)=>{
        setTestPw(e.target.value);
    }

    const handlePhoneClick=()=>{
        setIsClick(true);
    }

    const CheckPassword=()=>{
        if(password===testPw){
            setTestValid('1');
        }else{
            setTestValid('2');
        }
    }

    return(
        <ModalWrapper>
            
            <LoginContent>

                <ContentHeader>
                    {
                        isJoin
                        ?"회원가입"
                        :
                        <span className="icon-logo">
                            <img alt="iconimg" className="icon" 
                            src="https://raw.githubusercontent.com/hanghae99-Wanted-Clone-Coding/Wanted-Client-Application/develop/src/assets/wanted-logo.png"></img>
                        </span>
                    }
                    <CloseBtn></CloseBtn>
                </ContentHeader>
                
                {
                    isJoin
                    ?   
                    <JoinContentBody>
                        <form className="join-form">
                            <InputStyle>
                                <label for="userName">이름</label>
                                <div className="input-body">
                                    <input type="text" name="userName" placeholder="이름을 입력해 주세요." id="userName"></input>
                                </div>
                            </InputStyle>

                            <InputStyle>
                                <label for="userPhoneNumber">휴대폰 번호</label>
                                <div className="input-body">
                                    <div className="userPhoneNum">
                                        <div className="phoneNum-select">
                                            <span>{selected}</span>
                                            <select className="select" onChange={handleSelect}>
                                                {
                                                    selectedList.map((list)=>(
                                                        <option value={list.num}>{list.num} {list.con}</option>
                                                    ))
                                                }
                                            </select>
                                            <div className="arrow-btn">
                                                <svg viewBox="0 0 19 19">
                                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="phoneNum-input input-body">
                                            <input 
                                                name="userPhoneNumber" type="text" value={phone}
                                                placeholder="(예시) 01034567890" onChange={handlePhone}></input>
                                            <button type="button" style={
                                                phoneValid==="1" 
                                                ?{color:"#36f",
                                                background:"none"}
                                                :{backgroundColor:"#f2f4f7"}
                                            } onClick={handlePhoneClick}>
                                                인증번호 받기
                                            </button>
                                        </div>
                                        <div className="code-input input-body">
                                            <input 
                                                className="inputCode" type="text" 
                                                name="code" placeholder="인증번호를 입력해 주세요." 
                                                style={
                                                    isClick
                                                    ?{color:"#36f",
                                                    background:"none"
                                                    }
                                                    :{backgroundColor:"#f2f4f7"}}
                                            ></input>
                                        </div>
                                        {
                                            phoneValid=="2"&&phone.length>0
                                            ?<div className="errormsg">올바른 전화번호를 입력해 주세요.</div>
                                            :""
                                        }
                                        {
                                            phoneValid==2&&phone.length==0
                                            ?<div className="errormsg">휴대폰 번호는 필수정보 입니다.</div>
                                            :""
                                        }
                                    </div>
                                </div>

                            </InputStyle>

                            <InputStyle>    
                                <label for="userPassword">비밀번호</label>
                                <div className="input-body">
                                    <input 
                                    type="password" name="userPassword" 
                                    maxlength="16" placeholder="비밀번호를 입력해 주세요." 
                                    id="userPassword" onChange={handlePassword}></input>
                                </div>
                                <div className="password-guid">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요.</div>
                            </InputStyle>

                            <InputStyle>
                                <label for="userPasswordRepeat">비밀번호 확인</label>
                                <div className="input-body">
                                    <input 
                                    type="password" name="userPasswordRepeat" 
                                    maxlength="16" placeholder="비밀번호를 다시 한번 입력해 주세요" 
                                    id="userPasswordRepeat" onChange={handleTestPw}></input>
                                </div>
                            </InputStyle>

                            <AgreementWrapper>
                                <div className="agreement-style">
                                    <CheckBox></CheckBox>
                                    <div className="label-style">
                                        <input type="checkbox" name="allAgreement"></input>
                                        전체 동의
                                    </div>
                                </div>
                                
                                <div className="agreement-style" style={{borderBottom:"none"}}>
                                    <CheckBox></CheckBox>
                                    <div className="label-style" style={{color:"#939393"}}>
                                        <input type="checkbox" name="acceptPrivacy"></input>
                                        개인정보 수집 및 이용 동의
                                        <span>(필수)</span>
                                        <a href="https://help.wanted.co.kr/hc/ko/articles/360040127872" target="_blank" className="agreement-link">자세히</a>
                                    </div>
                                </div>

                                <div className="agreement-style" style={{borderBottom:"none"}}>
                                    <CheckBox></CheckBox>
                                    <div className="label-style" style={{color:"#939393"}}>
                                        <input type="checkbox" name="acceptPrivacy"></input>
                                        이벤트 소식 등 알림 정보 받기
                                        <a href="https://help.wanted.co.kr/hc/ko/articles/360040540111" target="_blank" className="agreement-link">자세히</a>
                                    </div>
                                </div>

                            </AgreementWrapper>

                        </form>
                        <div className="submitBtn">
                            <div className="btn-wrapper">
                                <button type="submit" onClick={CheckPassword}>회원가입하기</button>
                            </div>
                        </div>
                        
                    </JoinContentBody>
                    :
                    <ContentBody>
                        <div className="text-container">
                            <h1>직장인을 위한<br/>커리어 플랫폼, 원티드!</h1>
                            <h2>커리어 성장과 행복을 위한 여정<br/>지금 원티드에서 시작하세요.</h2>
                        </div>
                        <div className="input-container">
                            <input className="input-email"></input>
                            <InputStyle>
                                <label for="email">이메일</label>
                                <div className="input-body">
                                    <input 
                                    type="email" placeholder="이메일을 입력해 주세요." 
                                    className="emailValue" onChange={handleEmail}></input>
                                </div>
                                {
                                    emailValid=="2"
                                    ?<div className="errormsg">올바른 이메일 형식을 입력해주세요.</div>
                                    :""
                                }
                                
                            </InputStyle>
                            <div className="bottom-wrapper">
                                <button onClick={handleJoin}>
                                    <svg viewBox="0 0 24 24" width="24" height="24" className="email-icon">
                                        <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="2">
                                            <rect width="17.2" height="14" x="3.4" y="5" rx="3"></rect>
                                            <path d="M3.2 5.6L12 12l8.8-6.4"></path>
                                        </g>
                                    </svg>
                                    이메일로 계속하기 
                                </button>
                                <div className="divider">or</div>
                                <div className="continue">다음 계정으로 계속하기</div>
                                <div className="socialLogin-wrapper">
                                    <SocialBtn 
                                    type="Kakao"
                                    d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"
                                    ></SocialBtn>
                                    <SocialBtn 
                                    type="Facebook"
                                    d="M11.214 12.603l.622-4.055h-3.89V5.917c0-1.11.543-2.191 2.285-2.191H12V.274S10.395 0 8.86 0C5.656 0 3.562 1.942 3.562 5.458v3.09H0v4.055h3.562v9.802c.714.112 1.446.17 2.191.17.746 0 1.478-.058 2.192-.17v-9.802h3.269"
                                    ></SocialBtn>
                                    <SocialBtn 
                                    type="Google"></SocialBtn>
                                    <SocialBtn 
                                    type="Apple"
                                    d="M15.868 12.55c.033 3.574 3.098 4.764 3.132 4.779-.026.084-.49 1.695-1.615 3.36-.972 1.439-1.982 2.872-3.572 2.902-1.562.03-2.065-.938-3.851-.938s-2.344.908-3.823.967c-1.535.059-2.704-1.556-3.684-2.99C.45 17.698-1.08 12.343.975 8.73c1.022-1.795 2.848-2.932 4.83-2.96 1.506-.03 2.929 1.026 3.85 1.026.921 0 2.65-1.27 4.467-1.083.761.032 2.897.31 4.268 2.343-.11.07-2.548 1.506-2.522 4.494m-2.936-8.777c.815-.999 1.363-2.389 1.213-3.772-1.174.048-2.594.792-3.437 1.79-.755.884-1.416 2.298-1.238 3.654 1.31.103 2.647-.673 3.462-1.672"></SocialBtn>
                                </div>
                            </div>
                            <p>
                                걱정마세요! 여려분의 지원 활동은 SNS에 노출되지 않습니다.<br/>
                                회원가입 시&nbsp;
                                <a href="https://help.wanted.co.kr/hc/ko/articles/360035484292" target="_blank">개인정보 처리방침</a>
                                과&nbsp;
                                <a href="https://help.wanted.co.kr/hc/ko/articles/360035844551" target="_blank">이용약관</a>
                                을 확인하였으며, 동의합니다.
                            </p>
                        </div>
                    </ContentBody>
                }

            </LoginContent>
                        
            <div className="modal-background"></div>

        </ModalWrapper>
    )
}

const ModalWrapper=styled.div`
    top:0;
    left:0;
    right:0;
    bottom:0;
    position:fixed;
    overflow:hidden;
    z-index:1000;

    .modal-background{
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index:4;
        background-color:rgba(0,0,0,.5);
    }
`

const LoginContent=styled.div`
    width:400px;
    overflow-y:auto;
    top:50%;
    left:50%;
    max-width:500px;
    max-height: calc(100vh - 150px);
    transform:translate(-50%,-50%);
    border-radius:5px;
    background-color:#fff;
    z-index:5;
    position:absolute;
    ::-webkit-scrollbar{
        display:none;
    }
`

const ContentHeader=styled.div` 
    border-bottom:0;
    padding:16px 20px;
    padding-top:20px;
    position:relative;
    color:#333;
    text-align:center;
    font-size:16px;
    font-weight:600;
    height:54px;

    .icon-logo{
        vertical-align:middle;
    }
    .icon-logo>img{
        width:70px;
    }
    .icon-close{
        position:absolute;
        top:50%;
        right:0;
        padding:15px;
        line-height:0;
        transform:translateY(-50%);
    }
`
const JoinContentBody=styled.div`
    padding-bottom:0;
    padding:20px;

    .phoneNum-select{
        margin-bottom:10px;
        position:relative;
        flex:1 1;
        line-height:50px;
        padding:0 15px;
        height:50px;
        font-size:15px;
        border-radius:5px;
        border:1px solid #e1e2e3;
        color:#333;
    }
    .phoneNum-select>select{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        padding:0 15px;
        height:50px;
        font-size:15px;
        border-radius:5px;
        border:1px solid #e1e2e3;
        color:#333;
        opacity:0;
        appearance:none;
    }
    .arrow-btn{
        position:absolute;
        width:10px;
        top:50%;
        transform:translateY(-50%);
        right:10px;
        font-size:20px;
        color:#333;
        z-index:-1;
    }

    .phoneNum-input{
        display:flex;
    }
    .phoneNum-input>button{
        position:relative;
        margin-left:10px;
        min-width:117px;
        padding:16px 15px 14px;
        border-radius:5px;
        font-weight:700;
        color:#ccc;
        border:1px solid #e1e2e3;
}
    }
    .inputCode{
        &:disabled{
            background-color:#f2f4f7;
        }
    }
    .password-guid{
        color:#767676;
        bottom:0;
        margin-top:6px;
        font-size:10.5px;
    }
    .submitBtn{
        position:sticky;
        bottom:0;
        left:0;
        right:0;
    }
    .btn-wrapper{
        background-color:#fff;
        height:70px;
    }
    .btn-wrapper>button{
        background-color:#f2f4f7;
        color:#cacaca;
        border-color:transparent;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:54px;
        border:0;
        border-radius:27px;
        font-size:16px;
        font-weight:600;
    }

`

const ContentBody=styled.div`
    background-color:#fff;
    padding:20px;

    .text-container{
        text-align:center;
        margin-top:24px;
        margin-bottom:40px;
    }
    .text-container>h1{
        line-height:1.54;
        font-size:26px;
        font-weight:600;
        color:#333
    }
    h2{
        margin-top:16px;
        line-height:1.5;
        font-size:16px;
        font-weight:400;
        color:#666;
    }


    .input-container{
        position:relative;
        overflow:hidden;
        z-index:1;
    }
    .input-email{
        appearance:none;
        position:absolute;
        z-index:-1;
        top:-10px;
        left:0;
        padding:0;
        height:0;
        border:1px solid transparent;
    }


    .bottom-wrapper>button{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:54px;
        border:0;
        border-radius:27px;
        background-color:#36f;
        font-size:16px;
        font-seight:600;
        color:#fff;
    }
    .email-icon{
        margin-right:10px;
    }
    .divider{
        color:#969696;
        font-size:14px;
        font-weight:500;
        line-height:1;
        text-align:center;
        margin:13px auto;
        white-space:pre;
        display:block;
    }
    .continue{
        text-align:center;
        color:#767676;
        margin-bottom:17px;
        font-size:14px;
    }
    .socialLogin-wrapper{
        width:100%;
        height:84px;
        margin:auto;
    }

    p{
        margin-top:26px;
        text-align:center;
        font-size:11px;
        line-height:18px;
        color:#999;
    }
    p>a{
        collor:#336ff;
        text-decoration:underline;
    }

`
const CheckBox=()=>{
    return(
        <div className="check-style">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ececec">
                <path d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"></path>
            </svg>
        </div>
    )
}
