// import { useParams } from "react-router";

import { useLoaderData } from "react-router";

const User = () => {

    // console.log(useParams());

    const user = useLoaderData();

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
    )
}

export default User;