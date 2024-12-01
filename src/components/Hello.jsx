import Description from "./Description";
import Header from "./Header";

const Hello = () => {

    const user = 'John';

    return (
        <>
            <Header
                user={user}
            />
            <Description />
        </>
    )
}

export default Hello;