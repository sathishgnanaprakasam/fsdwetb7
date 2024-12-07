const Header = ({ getTime }) => {
    const time = new Date().toLocaleTimeString();

    getTime(time);

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}

export default Header;