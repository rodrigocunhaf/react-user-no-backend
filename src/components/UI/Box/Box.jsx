import React from "react";
import styled from "./Box.module.css"


const BoxInterface = ( props) => {

    return (
        <div className={
                `${styled.interface} 
                 ${ ( props.isList && styled.list )|| styled.form}`}>
                
                {props.children}

        </div>)

}

export default BoxInterface;