import React, {useState} from "react";

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const AddUser = ({userList,setuserList})=>{

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [errMessage, setErrMessage] = useState("");

    function saveUser(){
        
        if(name.trim(' ') === ""|| email.trim(' ') === ""){
            setErrMessage("Name or Email cannot be empty!");
        }
        else if(!validateEmail(email.trim(' '))){
            setErrMessage("Please Enter a valid Email!");
        }
        else{
            setuserList(userList.concat({name,email,todo:[]}))
            console.log(validateEmail(email));
            setName("");
            setEmail("");
            setErrMessage("");
        }
    }

   

    return(
        <React.Fragment>
            <div className={"Card"}>
                <center>
                    <h3>Add User</h3>
                </center>
              
                    Name :   <input  type="text" value={name}  placeholder={"enter username"} onChange={e=>setName(e.target.value)}/> <br /> <br />
                
                <label>
                    Email:  <input type="text" value={email}  placeholder={"enter email"} onChange={e=>setEmail(e.target.value)}></input>
                </label>
                <br />  <br />


                <div className="error">{errMessage}</div> <br />
                <center>
                    <button className="button-success" onClick={()=> saveUser()}>
                        save
                    </button>
                </center>
            </div>
        </React.Fragment>
    );
}

export default AddUser;