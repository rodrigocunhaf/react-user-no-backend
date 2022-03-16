import React, { useState } from "react";
import style from "./ErrorModule.module.css";
import Button from "../UI/Button/Button.jsx"


const ErrorModule = (props) => {

    let errors =  props.errorList.map( texts => {
        return <div className={style.error} key={texts.id}>{texts.description}</div>
    })

    return (
        <div className={style.lockscreen} style={{display:props.openModal}}>
            <div className={style.box}>
                <h1 className={style.title}>Validation error.</h1>
                {errors}
                <div className={style.boxButton}>
                    <Button title={'Ok'} method={props.method} value={'none'} clearErrors={props.clearErrors}/>
                </div>
            </div>
        </div>
    )
}

export default ErrorModule;