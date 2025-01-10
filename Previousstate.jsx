import { useState, useRef, useEffect } from "react";

function Previousstate() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(null);

    useEffect (() => {
         prevCountRef.current = count;
    });


    return (
        <div style={{textAlign : "center"}}>
            <h1>Current point : {count} </h1>
            <h2>Previous count : {prevCountRef.current}</h2>
            <button onClick={() => setCount(count + 1)}>increment</button> 
        </div>
    );
}

export default Previousstate;



