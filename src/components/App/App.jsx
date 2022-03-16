import React, { useState } from 'react';
import style from "./App.module.css";
import Box from "../UI/Box/Box.jsx"
import FormNewUser from '../FormNewUser/FormNewUser.jsx';
import UserList from '../UserList/UserList';
const App = () => {

    const [usersData, setUserData] = useState([]);

    function addUserOnList (data) {
        setUserData( prevState => {
            return [data, ...prevState]
        });
    };

    return (
        <div className={style.app}>
            <Box>
                <FormNewUser addUserOnList={addUserOnList}/>
            </Box>
            <Box isList={true}>
                <UserList items={usersData} />
            </Box>
        </div>
    )
};

export default App;