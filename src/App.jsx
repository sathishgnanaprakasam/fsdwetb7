import Hello from './components/Hello';

function App() {
    const user1 = 'John';
    const user2 = 'Jane';

    return (
        <>
            <Hello
                user={user1}
            />
            <Hello
                user={user2}
            />
        </>
    )
}

export default App;