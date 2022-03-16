import React from "react";
import style from './UserListItem.module.css';

const UserListItem = ( props) => {

    return (
        <li className={style.user}>
                {`${props.title} (${props.age} years old.)`}
        </li>)
};

export default UserListItem;