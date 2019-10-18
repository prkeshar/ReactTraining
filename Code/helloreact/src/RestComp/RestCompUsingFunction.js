import React, {useState} from 'react'
import Axios from 'axios'

export function RestCompUsingFunction() {
    //users is variable while setUsers is a function which will update users variable
    //in useState, we are initializing users variable
    const [users, setUsers] = useState([]);

    let getUsers = () => {
        let url = "https://jsonplaceholder.typicode.com/users";
        Axios.get(url).then((res) => {
            setUsers([...res.data]);
        }).catch((err) => {
            alert(err);
        });
    }

    let tmp = users.map(item => {
        return <tr>
            <td>{item.username}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            </tr>;
    });

    return (
        <div>
        <h3>Rest calls</h3>
        <button onClick={getUsers}>Get users</button>
        <table>
            {tmp}
        </table>
    </div>
    )
}