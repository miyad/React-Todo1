import React from "react";

   


const EditUser = ({name,email,userList,setUserList,isEditing})=>{
    function update() {
        isEditing = false;
    }

        return (
            <React.Fragment>
                 <div className={"Card"}>
        <div>
            Name: <input type="text" defaultValue={name}  />
             
             <br /> <br />
              Email:  <input type="text" defaultValue={email}/>   
        </div>
        <br />
        <center> <button className={"button-primary"} onClick={()=>update()} >Update</button> </center>
       
       </div>
            </React.Fragment>
        );
}

export default EditUser;
