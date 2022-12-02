import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    
    let count = users.length;
    const handleDelete = (userId) => {

    };
    const renderPhrase = () => {

    };

    return (
        <>
            <h1>{count} человек тусанет с тобой сегодня</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Проффесия</th>
                        <th scope="col">Встретился,раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"><></></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return(
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>
                                    {user.qualities.map((item)=>
                                        <span 
                                            key={item._id}>
                                                {item.name}
                                        </span>
                                    )}
                                </td>
                                <td>
                                    {user.profession.name}
                                </td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        );
                    })};
                </tbody>
            </table>
        </>
    );    
} 


export default Users;