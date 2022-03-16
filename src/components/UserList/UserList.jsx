import React from "react";
import style from "./UserList.module.css";
import UserListItem from "./UserListItem";

const UserList = (props => {

    let userList = props.items.map( user => {
        return (<UserListItem key={user.id} title={user.name} age={user.age}/>)
    })

    return (
        <div>
            <h1 className={style.listHead}><p>User List.</p></h1>
            <div>
                <ul className={style.list}>
                    {userList}
                </ul>
            </div>
        </div>)
})

export default UserList;