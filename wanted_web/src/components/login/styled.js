import styled from "styled-components";

export const InputStyle=styled.div`
    padding-bottom:22px;
    position:relative;
    color:#767676;

    input::placeholder{
        color:#ccc;
    }
    label{
        font-size:14px;
        font-weight:400;
    }
    .input-body{
        margin-top:11px;
    }
    .input-body>input{
        width:100%;
        height:50px;
        padding-right:15px;
        padding-left:15px;
        border-radius:5px;
        border:1px solid #e1e2e3;
        background-color:#fff;
        font-size:15px;
        color:#333;
        outline:none;
        &:focus{
            border-color:#36f;
        }
    }
    .errormsg{
        color:#fe415c;
        bottom:0;
        margin-top:6px;
        font-size:12px;
    }
`

export const AgreementWrapper=styled.div`
    margin-top:8px;

    .agreement-style{
        color:#ececec;
        height:auto;
        padding-bottom:14px;
        border-bottom:1px solid #ececec;
        margin-bottom:15px;
        display:flex;
        align-items:center;
        position:relative;

    }
    .check-style{
        display:flex;
        justify-content:center;
        align-items:center;
        width:17.3px;
        height:17.3px;
        margin-right:10px;
    }
    .label-style{
        color:#333;
        flex:1 1;
        font-size:15px;
    }
    .label-style>input{
        position:absolute;
        left:1px;
        opacity:0;
        vertical-align:top;
        cursor:pointer;
        margin:4px 0 0;
    }
    .agreement-link{
        float:right;
        font-size:13px;
        line-height:19px;
        color:#767676;
    }
`
