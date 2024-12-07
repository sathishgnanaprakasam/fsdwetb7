const Header = (props) => {
    console.log(props.time);

    return (
        <div>
            <h1>{props.time}</h1>
        </div>
    )
}

export default Header;