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
                            to={`/dashboard/users/user/${user.id}`}
                        >
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />
            <Outlet
                context={users}
            />
        </div>
    )
}

export default Users;