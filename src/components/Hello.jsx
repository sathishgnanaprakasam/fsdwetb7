import Description from "./Description";
import Header from "./Header";

const Hello = () => {

    const getData = (data) => {
        console.log(data);
    }

    return (
        <>
            <Header
                getData={getData}
            />
            <Description />
        </>
    )
}

export default Hello;