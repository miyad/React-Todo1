import React, {useState} from "react";
import User from "./Components/User";
import AddUser from './Components/AddUser';


function App() {

  const [userList, setuserList] = useState([
    {
      name: "Masum Rahman",
      email: "masum@gmail.com",
      todo:[
        "Lab Report","Quiz Preparation"
      ]
    },
    {
      name: "MA Sayeed",
      email: "sayeed.sbmc@gmail.com",
      todo:[
        "Lab Report1","Quiz Preparation1"
      ]
    },  
    {
      name: "Dipto Paul",
      email: "dd.marbel@gmail.com",
      todo:[
        "Lab Report2","Quiz Preparation2"
      ]
    }]);
    
  return (
    <React.Fragment>
          <center>
              <h1>
                Welcome to mange Todo
              </h1>
            </center>
        {
            
            userList.map((user,index)=> <User user={user} userList={userList} setUserList={setuserList} key={index}/>)
        }
        <AddUser userList={userList} setuserList={setuserList}/>
    </React.Fragment>
  );
}

export default App;
