import { useOutletContext, useParams } from "react-router";

const User = () => {

    const { id } = useParams();
    const users = useOutletContext();
    const user = users.find(user => user.id === parseInt(id));

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