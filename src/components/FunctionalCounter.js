import { useState } from "react";

function FunctionCounter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    return <div>
        <div>Counter Value: {counter}</div>
        <div><button onClick={increment}>Counter</button></div>

    </div>

}
export default FunctionCounter;