import React, {useState} from "react";

function Validation() {
    const[form, setForm] = useState({
        Username : "",
        Password : "",
    });

    const[errors, setErrors] = useState({
        Username : "",
        Password : "",
    });

    const validate = () => {
        let isvalid = true;
        const Errors = {
            Username : "",
            Password : "",
        };

        if(!form.Username.trim()) {
            Errors.Username = " Username is requried";
            isvalid = false;
        }

        if(!form.Password.trim()) {
            Errors.Password = " Password is requried";
            isvalid = false;
        } else if (form.Password.length<6) {
            Errors.Password = " Password must be in atleast 6 characters.";
            isvalid = false;
    }
        setErrors(Errors);
        return isvalid;
 };
    const HandleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
    alert("Form was submitted succesfully..!");
    }
};

 return(
    //for username inputs 
    <div style={{ textAlign: "center",
                 backgroundColor: "#F1F7B5",
                 minHeight: "100vh", 
                 padding: "20px" }}>
         <form onSubmit={HandleSubmit}>
         <h2>Login Form</h2>

        <div style={{textAlign: "center", backgroundColor: "#F1F7B5",}}>
        <label style={{ marginRight:"20px"}}>Username :</label>
        <input
        type="Username"
        id="Username"
        value={form.Username}
        placeholder="Enter your Username"
        onChange={(e) => setForm({...form, Username: e.target.value})
    }
        style={{width: "130px",
               padding: "8px",
               border: "1px solid #black", 
               borderRadius:"4px"}}
        />     
</div>
        <p style={{color:"red",fontSize:"15px"}}><span>{errors.Username}</span></p>
<br />
        {/* for password  */}
        <div style={{textAlign: "center", backgroundColor: "#F1F7B5"}}>
        <label style={{ marginRight:"20px"}}>Password :</label>
        <input
        type="Password"
        id="Password"
        value={form.Password}
        placeholder="Enter your Password"
        onChange ={(e) => setForm({...form, Password: e.target.value})
    }
        style={{width: "130px",
                padding: "8px", 
                border: "1px solid #black", 
                borderRadius:"4px",
                marginBottom: "10px",}}  
        />
        </div>
        <p style={{color:"red",fontSize:"15px"}}><span>{errors.Username}</span></p>
        <br />
        <button type="Submit" style={{padding: "10px", 
                                        cursor: "pointer",
                                        border: "1px solid #black", 
                                        borderRadius:"4px",
                                        marginBottom: "10px",
                                }}>Submit</button>
    </form>
    </div>
);
}
export default Validation;



