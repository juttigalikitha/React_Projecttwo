import React, {useState} from "react";
function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim() ==="" )return;
        setTasks([...tasks, input]);
        setInput('');
    };
    const deleteTask = (indexToDelete) => {
        setTasks(tasks.filter(( _,index)  => index!== indexToDelete)); 
    };
    return(
        <div style={{backgroundColor: "#DEB6AB",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    display: "flex",
                    minHeight: "100vh",
                    
         }}>
        <div style={{ textAlign: "center",
                      backgroundColor: "#FFF5F3",
                      padding: "20px",
                      borderRadius: "10px",
                      textAlign: "center",
                      width: "100%",
                      maxWidth: "400px",
         }}>
            <h1 style={{ color: "#4A3933", marginBottom: "20px" }}>To Do List</h1>
            <div style={{ display: "flex", marginBottom: "20px" }}>
            <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
              style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #4A3933",
              borderRadius: "5px",
              marginRight: "10px",}}
            />
            <button  style={{ backgroundColor: "#4A3933",
                              color: "#fff",
                              border: "none",
                              borderRadius: "5px",
                              padding: "10px 15px",
                              cursor: "pointer",
             }} onClick={addTask}>Add</button>
             </div>
            <ul style={{listStyle: "none",
                        padding: "0",
                        margin: "0",
                        marginTop: "10px",
                        // backgroundColor: "#FFF5F3",
                        // padding: "1px",
                        // borderRadius: "5px",
                        // marginBottom: "5px",
                        // width: "350px",
                        // marginLeft: "400px"
            }}>
            {tasks.map((task, index) => (
            <li key={index} style={{display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    backgroundColor: "#FFF5F3",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    marginBottom: "10px",}}>
                   <span style={{ color: "#4A3933" }}>{task}</span>                      
             <button  style={{backgroundColor: "#FF6B6B",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
            }}   onClick={() => deleteTask(index)}>Delete</button>
            </li>
            ))}
         </ul>
       </div>
       </div>
      );
    }
export default Todolist;
           