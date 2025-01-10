// import React from "react";
 
// function Workout() {
//         const [num1, setNum1] = useState('');
//         const [num2, setNum2] = useState('');
//         const [result, setResults] = useState(null);
     
     
//         const handleAddition = () => {
//             const sum = parseFloat(num1) + parseFloat(num2);
//             setResults(result);
//         };
     
//         return (
           
//         <div style={{textAlign: "center", padding: "20px"}}>
//             <div style={{display: "grid", justifyContent: "center", textAlign: "center",width: "50px"}}>
//                 <h1>Adding Two Numbers</h1>
//                 <input style={{padding: "20px", border: "1px solid black", borderRadius: "2px"}}
//                  type="number" placeholder="Enter your Number" value = {num1} onChange={(e) => setNum1(e.target.value)
//                 }/>
//                 <input style={{padding: "20px", border: "1px solid black", borderRadius: "2px"}}
//                  type="number" placeholder="Enter your Number" value = {num2} onChange={(e) => setNum2(e.target.value)}/>                                                                                                 
//                 <button style={{padding: "20px", cursor: "pointer", borderRadius: "2px"}}
//                 onClick={handleAddition}>Add</button>
//                 </div>
//                 <h2>Result: {result}</h2>
//           </div>
           
//         )
//     };
    
// export default Workout;




import React, { useState } from "react";

const Workout = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  // cont [operation, setOperation] = useState('');

  const handleNumber1Change = (e) => setNumber1(Number(e.target.value));
  const handleNumber2Change = (e) => setNumber2(Number(e.target.value));
  // const handleOperation = (e) => setOperation(e.target.value);

  // switch(operation) {
  //   case "Add" :
  //     {number1 + number2};
  //     break;
  //   case "Subtract":
  //     {number1 - number2};
  //     break;
  //   case  "Multiplication":
  //     {number1 * number2};
  //     break;
  //   case  "Division": 
  //   {number1 / number2};;
  //     break;
  //   default : option;
  // }
  return (
    
    <div style={styles.container}>
    <h1 style={{textAlign: "center"}}><u>Adding Two Values</u></h1>
    <div style={styles.gridContainer}>

    {/* Input for first number  */}
    <div style={styles.box}>   
    <h2>Value 1 :</h2>
    <input type="text" value={number1} onChange={handleNumber1Change} style={styles.input}/>
    </div>

    {/*  Input for second number */}
    <div style={styles.box}>
    <h2>Value 2 :</h2>
    <input type="text"  value={number2} onChange={handleNumber2Change} style={styles.input} />
    </div>

    {/* Symbol for addition */}
    <div style={styles.box}>
    <p style={styles.symbol}>+</p>
    {/* <select value= "operation">
      <option value = "Add">
        +
      </option>
      <option value= "Subtract">
        -
      </option>
      <option value = "Multiplication">
        *
      </option>
      <option value= "Division">
        /
      </option>
      <input onChange={handleOperation} style={styles.input} />
    </select> */}
    </div>

    {/*result */}
    <div style={styles.box}>
    <h2>Result : </h2>
    <p style={styles.result}>{number1 + number2}</p>   

    </div>
    </div>
    </div>
  );
};

    const styles = {
    container: {
      backgroundColor: "#aed5e7", // Light blue background 
      padding: "20px",
      borderRadius: "12px",
      maxWidth: "650px",
      margin: "20px auto",
      },

    gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // Two columns layout
      gap: "10px",
      justifyContent: "center", // grid will be in centered
      },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      background: "#f0f8ff",
      width: "100%", // boxes are there in the container
      boxSizing: "border-box", // both padding and border in the calculation of the width 
      },
    input: {
      width: "100%", // for values input inside the box  
      padding: "8px",
      fontSize: "18px",
      textAlign: "center",
      },
    heading: {
      fontSize: "16px",
      fontWeight: "normal", 
      marginBottom: "8px",
      },
    symbol: {
      fontSize: "24px",
      fontWeight: "bold",
      },
    result: {
      fontSize: "20px",
      fontWeight: "normal", 
      },
  };

export default Workout;
