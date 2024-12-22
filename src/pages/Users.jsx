import { Link, Outlet, useLoaderData } from "react-router";

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link
                            to={`/dashboard/user/${user.id}`}
                        >
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}

export default Users;