import { useMemo } from "react";

const App = () => {

    const largeSum = useMemo(() => {
        console.log('Calculating sum...');
        let sum = 0;
        for (let i = 0; i < 10000000000; i++) {
            sum += i;
        }
        return sum;
    }, []);

    console.log(largeSum);

    return (
        <div>App</div>
    )
}

export default App;