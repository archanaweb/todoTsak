import React, { useState } from "react";

const Todo = ()=> {

    const [item, setItem] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addItem =()=> {
        setTodoList([...todoList, item])
    }
    const deleteItem = (i)=> {
        const updatedList = todoList.filter((item, ind)=> i !== ind);
        setTodoList(updatedList)
    }


    return(
        <>
        <div className="todoList">
            <h2>Todo List</h2>
            <div className="todoInput">
                <input type="text" value={item} 
                onChange={(e)=>setItem(e.target.value)}>
                </input>
                <button onClick={addItem}>Add</button>
                <p>{item}</p>
            </div>

            <div className="listItem">
                <ul>
                {todoList.map((item,i)=>{
                    return(
                        <li key={i}>
                            <input type="text" value={item}></input>
                            <button onClick={()=>deleteItem(i)}>Delete</button>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default Todo;