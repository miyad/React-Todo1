import React, { useState } from "react";
import '../Styles/design.css';
import Todo from "./ToDo";


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function User(props){
      
    const user = props.user;
    const {userList,setUserList} = props;

    const {name,email,todo} = user;

    const [thisUser,setThisUser] = useState(user);

    const [isEditing, setisEditing] = useState(false);
    const [editName,seteditName] = useState(name);
    const [editEmail,seteditEmail] = useState(email);
    const [errMessage, setErrMessage] = useState("");
    const [toDo,settoDo] = useState(props.user.todo);


    function editAction(){
      setisEditing(true);
    }
    
    function updateUser() {

      if(editName.trim(' ') === ""|| editEmail.trim(' ') === ""){
        setErrMessage("Name or Email cannot be empty!");
    }
    else if(!validateEmail(editEmail.trim(' '))){
        setErrMessage("Please Enter a valid Email!");
    }
    else{
      setisEditing(false);
      
     
      
      const newUserList = [];
      for(let user of userList){ 
          if(user.email===email){
            newUserList.push({name:editName,email:editEmail,todo:user.todo});
          }
          else newUserList.push(user);
      }
      setUserList(newUserList);
      

    }
    }


    if(isEditing){ 

      return (
        <React.Fragment>
             <div className={"Card"}>
    <div>
        Name: <input type="text" defaultValue={name} onChange={e=>seteditName(e.target.value)} />
         
         <br /> <br />
          Email:  <input type="text" defaultValue={email} onChange={e=>seteditEmail(e.target.value)}/>   
    </div> <br /> 
    <center>To Do list: </center> <hr /> 
    <Todo user={props.user} todo={toDo} settoDo={settoDo} userList={userList} setUserList={setUserList}/>
    <br />
    <center className="error">{errMessage}</center><br />
    <center> <button className={"button-primary"} onClick={()=>updateUser() } >Update</button> </center>
   
   </div>
        </React.Fragment>
    );
    }
    return (
      <div className={"Card"}>
        <div> Name: <h2>{name}</h2> Email: <h4> {email} </h4> </div>
        <br />
         <center>To Do list: </center> <hr />
        <Todo user={props.user} todo={toDo} settoDo={settoDo} userList={userList} setUserList={setUserList}/>
        <button className={"button-primary"} onClick={()=>editAction()} >Edit</button> 
        <button className={"button-danger"} onClick={()=> {
          const newUserList = userList.filter((user)=>user.email!==email);
          setUserList(newUserList);
        }
      }>Delete</button>
      </div>
    );
}

export default User;