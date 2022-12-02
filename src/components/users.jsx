import React, { useState } from "react";
import api from "../api";



const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    let count = 0;
    const handleDelete = (userId) => {

    };
    const renderPhrase = () => {

    };

    const renderTable = () => {
        return (
            for (let i = 0; i <= users.length; i++){
                <tr>
                    <td>{users.name}</td>
                    <td>{users.qualities}</td>
                    <td>{users.profession}</td>
                    <td>{users.completedMeetings}</td>
                    <td>{users.rate}</td>
                    <td><button></button></td>
                </tr>
            }
        ); 
    };

    return (
        <>
            <h1>{count} человек тусанет с тобой сегодня</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Проффесия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable()};
                </tbody>
            </table>
        </>
    );    
} 


export default Users;