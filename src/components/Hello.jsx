import Description from "./Description";
import Header from "./Header";

const Hello = ({ user }) => {

    return (
        <>
            <Header
                user={user}
            />
            <Description
                user={user}
            />
        </>
    )
}

export default Hello;