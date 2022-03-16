import React from "react";
import style from "./Input.module.css";


const Input = (props) =>{


    function setInput( event ){
        props.method(event.target.value);
  
    };
 
    return <label 
                className={`${style.fontLabel} ${style.block}` }>{props.labelName}
                <input className={`${style.block} ${ (props.labelName === 'age' && style.fontInputAge) || style.fontInput }`} 
                        type={props.type} 
                        onChange={setInput}
                        value={props.valor}
                        min={ props.min && props.min }
                        placeholder={props.placeholder}
                        />
            </label>
};

export default Input;

