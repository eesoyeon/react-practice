import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={onClick}>+</button>
        </div>
    );
};

export default Counter;
