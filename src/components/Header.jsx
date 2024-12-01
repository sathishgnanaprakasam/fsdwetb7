const Header = ({ getData }) => {

    const user = 'Guest';

    getData(user);

    return <h1>Hello {user}!</h1>;
}

export default Header;