import React from "react";
import styled from 'styled-components';
import {useRecoilState} from "recoil";
import { popupRecoilState } from "../../atoms/Popup";

export default function CloseBtn(){
    const [popup,setPopup]=useRecoilState(popupRecoilState);

    const handlePopup=()=>{
        setPopup(!popup);
    }
    return(
        <CloseIcon onClick={handlePopup}>
            <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
                <path fill="currentColor" d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"></path>
            </svg>
        </CloseIcon>
    )
}

const CloseIcon=styled.button`

    position:absolute;
    top:50%;
    right:0;
    padding:15px;
    line-height:0;
    transform:translateY(-50%);

`