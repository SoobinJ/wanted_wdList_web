import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {useRecoilState} from "recoil";
import { mouseOverRecoilState } from "../../../atoms/MouseOver";
import { categoryTitleRecoilState } from "../../../atoms/CategoryTitle";

export default function CategoryItem(props){


    const [mouseOver,setMouseOver]=useRecoilState(mouseOverRecoilState);
    const [title,setTitle]=useRecoilState(categoryTitleRecoilState);

    function handleOver(e){
        setMouseOver(1);
        setTitle(e.target.value);
    }

    return(
        <Items onMouseOver={handleOver}>

                <button value={props.name}>
                    <span>
                        <em>{props.name}</em>
                    </span>
                </button>

        </Items>
    )
}

const Items=styled.li`
    button{
        height:40px;
        display:flex;
        align-items:center;
        flex:1 1;
        padding:0 20px;
        width:100%;
    }
    em{
        font-size:13px;
        font-weight:700;
        colr:#333;
        width:100%;
        overflow:hidden;
        text-overflow:ellipsis;
    }
`