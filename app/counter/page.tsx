"use client";
import { useState } from "react";

export default function Page() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h1 className="text-3xl">{count}</h1>
            <button onClick={increment} className="px-4 py-2 m-2 bg-blue-500 text-white rounded">Up</button>
            <button onClick={decrement} className="px-4 py-2 m-2 bg-red-500 text-white rounded">Down</button>
        </div>
    );
}
