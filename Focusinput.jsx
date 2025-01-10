import React, {useRef} from "react";

function Focusinput () {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div style={{textAlign: "center",
                     marginTop: "50px", 
                     justifyContent : "center",
                     backgroundColor: "#f0f8ff", // Light blue background 
                     padding: "20px",
                     borderRadius: "12px",
                     maxWidth: "650px",
                     margin: "20px auto",
                     }}>
            <input  ref= {inputRef} type = "text" placeholder="Type of Something"/>
            <button onClick={handleFocus} style={{ marginLeft: "10px", padding: "10px", cursor: "pointer" }}> Focus Input</button>
        </div>
    )
};
export default Focusinput;