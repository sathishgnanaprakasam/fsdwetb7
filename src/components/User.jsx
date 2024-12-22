// import { useParams } from "react-router";

import { useLoaderData, useNavigate } from "react-router";

const User = () => {

    // console.log(useParams());

    const user = useLoaderData();
    const navigate = useNavigate();

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <button
                onClick={() => navigate(-1)}
            >Back</button>
        </div>
    )
}

export default User;