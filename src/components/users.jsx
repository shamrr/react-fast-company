import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [count, setCount] = useState(users.length)

    const handleDelete = (usersId) => {
        console.log('delete');
        setCount((prevState) => prevState - 1);
        console.log(usersId);
        setUsers(users.filter((user) => user._id !== usersId));
    };
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if(number > 4 && number < 15) return "человек тусанет";
        if([2,3,4].indexOf(lastOne) >= 0) return "человека тусанут";
        if(lastOne === 1) return "человек тусанет";
        return "Человек тусанет";
    };

    return (
        <>
            <span
                className={"badge bg-" + (users.length  > 0 ? "primary" : "danger")}>
                {users.length > 0 
                ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
                : "Никто с тобой не тусанет сегодня"
                }
            </span>
            {users.length > 0 &&
                <table className="table table-hover">
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
                                            className={"badge + m-1 bg-" + item.color} 
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
                                    <button className="btn bg-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            }
            
        </>
    );    
} 


export default Users;