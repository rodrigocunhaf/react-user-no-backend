import React, { useState } from "react";
import style from "./FormNewUser.module.css";
import Input from "../UI/Input/Input";
import Button from '../UI/Button/Button.jsx';
import ErrorModule from "../ErrorModule/ErrorModule.jsx"

const FormNewUser = (props) => {

    const [newUser, setNewUser] =  useState (
        {
            id:Math.floor(Math.random()*10000),
            name:'',
            age:'' 
        });

    const [openModal, setOpenModal] =  useState('none');


    const [errorList, setErrorList ] =  useState([]);


    const inputConfigs = [
        {
            id:'input-name',
            labelName:'name',
            type:'text',
            method:setNewUserName,
            valor:newUser.name,
            placeholder:"Type a name"
            
        },
        {
            id:'input-age',
            labelName:'age',
            type:'number',
            method:setNewUserAge,
            valor:newUser.age,
            min:18
        },
    ];

    function setNewUserName(value){
        setNewUser((prevState) => {
            return {...prevState, name:value}
        });
    };

    function setNewUserAge(value){
        setNewUser((prevState) => {
            return {...prevState, age:value}
        });
    };

    function ErrorList (error){
        setErrorList( (prevState) => {
            return [error, ...prevState];
        });
    };

    function validateUser(event){
        event.preventDefault();
        if (newUser.name  === '' || newUser.age === ''){   
            if ( newUser.name === ''){
                ErrorList({
                    id:'error-name',
                    description:'Invalid Username.'
                })
            }
            if ( newUser.age === ''){
                ErrorList({
                    id:'error-age',
                    description:'Invalid age.'
                })
            }
            setOpenModal('flex');            
        } else {
            props.addUserOnList(newUser)
            setNewUser({id:Math.floor(Math.random()*10000), name:'',age:''});
        };
    };


    function clearErrors (){
        setErrorList([])
    }

    const Inputs = inputConfigs.map( input => {
        return (<Input 
                    key={input.id} 
                    labelName={input.labelName} 
                    type={input.type} 
                    method={input.method} 
                    valor={input.valor} 
                    min={input.min}
                    placeholder={input.placeholder}/>)
    })

    return (
        <div >
            <ErrorModule openModal={openModal} method={setOpenModal} errorList={errorList} clearErrors={clearErrors}/>
            <form  className={style.register} onSubmit={validateUser}>
                {Inputs}
                <Button title={'Add User'}/>
            </form>
        </div>
    );
};

export default FormNewUser;