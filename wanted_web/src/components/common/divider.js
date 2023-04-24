import React from"react";
import styled from "styled-components";

export default function SectionDivider(){
    return(
        <Div>
            <hr></hr>
        </Div>
    )
}

const Div=styled.div`

    max-width:1060px;
    width:87.72%;
    margin:0 auto;

    hr{
        height:1px;
        margin:0;
        border:none;
        flex-shrink:0;
        background-color:#ececec;
    }
`