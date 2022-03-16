import React from "react";
import style from "./Button.module.css";


const Button = (props) => {

    function action (){

        if (props.clearErrors){
            props.clearErrors();
        }

        if (props.method){
            props.method(props.value);
        }
        
    };

    return (
        <div className={style.boxButton}>
            <button className={style.background} type="submit" onClick={ action } >{props.title}</button>
        </div>
    );
};

export default Button;