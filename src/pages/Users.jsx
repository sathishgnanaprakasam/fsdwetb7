import { useLoaderData } from "react-router";

const Users = () => {

    const users = useLoaderData();

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