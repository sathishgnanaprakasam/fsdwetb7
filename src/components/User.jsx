import { useOutletContext } from "react-router";
import { useSearchParams } from "react-router-dom";

const User = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
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