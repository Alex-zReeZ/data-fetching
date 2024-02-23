import React, { useState } from 'react';

const DynamicButton = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="bg-black text-white p-3 border-r-2 rounded-lg max-w-56 text-center flex justify-center">
            <button onClick={incrementCount}> You clicked on me {count} times!</button>
        </div>
    );
};

export default DynamicButton;



