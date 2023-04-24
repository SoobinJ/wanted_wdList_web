import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function SubCategoryItem(props){
    return(
        <SubItem>
            <Link to='/'>
                {props.text}
            </Link>

        </SubItem>
    )
}

const SubItem=styled.li`
    box-sizing:border-box;
    height:40px;
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:200px;
    padding:0 20px;
    a{
        white-space:nowrap;
        box-sizing:border-box;
        color:#333;
        padding-top:14px;
        display:inline-block;
        height:40px;
        font-size:13px;
        font-weight:400;
        flex:1 1;
        vertical-align:middle;
        max-width :140px;
        width:100%;
        text-overflow:ellipsis;
        overflow:hidden
    }

`