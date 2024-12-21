import { useEffect, useState } from "react";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    console.log(users);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Users;