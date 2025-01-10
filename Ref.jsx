import { useState, useEffect, useRef } from "react";

function Ref() {
    const[value, setValue] = useState('');
    const count = useRef(0);

    useEffect (() => {
         count.current = count.current + 1;
    });

    return (
        <div style={{textAlign: "center"}}>
        <input type = "text" value={value} onChange={(e) => setValue(e.target.value)}/>
     
        <h1>Render count : {count.current} </h1>
        </div>
    )
};
export default Ref;





