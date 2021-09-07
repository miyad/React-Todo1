import { useState } from "react";
import { isElement } from "react-dom/test-utils";

const Todo = (props)=>{
    //const {todo,settoDo} = props;
    const [newTask,setnewTaks] = useState("");

    const [isModifying,setisModifying] = useState(false);
    const [itemIndex,setItemIndex] = useState(0);
    const [task,setTask] = useState("");
    
    function saveTask(itemIndex) {
        props.user.todo[itemIndex] = task;
        console.log(task);
        setisModifying(false);
        setTask("");
    }
    
    if(isModifying){
        return(
            <div>
                <center><h4>Modify This Task</h4></center>
                {itemIndex+1}. <input type="text" defaultValue={task} onChange={e=>setTask(e.target.value)}></input> <button onClick={()=>saveTask(itemIndex)}>save</button>
            </div>
        );
    }


    return(
        <div>
            <ol>
       {props.user.todo.map((item,index)=><li key={index}>{item} <button onClick={()=>
        {
           const newList = (props.todo.filter(e=>e!==item));
           console.log("new list = ",newList);
           props.settoDo(newList);
           props.user.todo = newList;

           setnewTaks("");
        } }>x</button>
        
        <button onClick={()=>{setisModifying(true);setItemIndex(index);setTask(item);}}>modify</button>
    
        </li>)}
        <br />
       <li>
           <input value={newTask} type="text" placeholder={"enter a task"} onChange={e=>setnewTaks(e.target.value)} /> <button className={"button"} onClick={()=>{
               if(newTask.trim(' ').length>0)props.user.todo.push(newTask);
              // console.log(props.user.todo);
               setnewTaks("");
            }
               
               } >Add Item</button>       
        </li>
       </ol>
      </div>
    );
}
export default Todo;