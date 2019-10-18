import React from 'react'
import Axios from 'axios';

export class RestComp extends React.Component {
    users = [];

    constructor() {
        super();
        this.state = {
            userflag : false
        }
    }
    GetUsers = () => {
        let url = "https://jsonplaceholder.typicode.com/users";
        Axios.get(url).then((res) => {
            //let arr = JSON.stringify(res.data);
            this.users = res.data;
            this.setState({
                userflag : true
            })
        }).catch((err) => {
            alert(err);
        });
    }

    render() {
        return (
            <div>
                <h3>Rest calls</h3>
                <button onClick={this.GetUsers}>Get users</button>
                <table>
                    {this.users.map(item => {
                        return <tr>
                            <td>{item.username}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            </tr>;
                    })}
                </table>
            </div>
        );
    }
}