import React from "react";
import styled from 'styled-components';

export default function SocialBtn(props){

    const type=props.type;
    let fill="";
    let w="";
    let h="";

    let style={

    }
    const kStyle={
        backgroundColor:"#fee500",
    }
    const fStyle={
        backgroundColor:"#1877f2",
    }
    const gStyle={
        backgroundColor:"#fff",
        border:"1px solid #e1e2e3"
    }
    const aStyle={
        backgroundColor:"#000",
    }


    switch(type){
        case 'Kakao': 
            style=kStyle;
            fill="#000";
            w="22";
            h="21";
            break;

        case 'Facebook':
            style=fStyle;
            fill="#fff";
            w="12";
            h="23";
            break;

        case 'Google':
            style=gStyle;
            fill="red";
            w="23";
            h="23";
            break;
            
        case 'Apple':
            style=aStyle;
            fill="#fff";
            w="19";
            h="24";
            break;
    }

    return(
        <ButtonWrapper>
            <button style={style}>
                <svg width={w} height={h}>
                
                    {type=='Google'
                    ?
                    <g>
                        <path fill="#ea4335" d="M11.5 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.203 1.14 14.6 0 11.5 0 7.005 0 3.115 2.577 1.223 6.335l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"></path>
                        <path fill="#4285f4" d="M22.54 11.761c0-.815-.073-1.6-.21-2.352H11.5v4.448h6.19c-.268 1.438-1.078 2.656-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"></path>
                        <path fill="#fbbc05" d="M5.065 13.685c-.23-.69-.36-1.427-.36-2.185s.13-1.495.36-2.185v-2.98H1.223C.444 7.888 0 9.645 0 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"></path>
                        <path fill="#34a853" d="M11.5 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.223v2.98C3.115 20.423 7.005 23 11.5 23z"></path>
                    </g>
                    :
                    <path d={props.d} fill={fill}></path>
                    }
                </svg>
                
            </button>
            <div className="btn-title">{props.type}</div>
        </ButtonWrapper>
    )
}

const ButtonWrapper=styled.div`
    width:25%;
    position:relative;
    display:inline-block;

    button{
        background-color:blue;
        width:56px;
        height:56px;
        margin: 0 auto 8px;
        color:#737373;
        border-radius:28px;
        display:flex;
        justify-content:center;
        align-items:center;
        border:0;
        font-size:16px;
        font-weight:600;
    }
    .btn-title{
        width:70%;
        left:14.5%;
        position:absolute;
        top:62px;
        font-size:13px;
        font-weight:500;
        color:#666;
        text-align:center;
    }

`