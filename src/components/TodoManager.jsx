import React, { useState } from 'react'
c 
function TodoManager() {

  const[input,setInput]=useState('')
  const[tasks,setTasks]=useState([])
  const[complete,setComplete]=useState(true)


  function HandleAdd(e){
    if(input==""){
      alert('Enter your task here')
    }else
    setTasks([...tasks,{text:input,complete:false}])
    setInput('')
  }


  function HandleDelete(index){
    let updatedTasks=[...tasks]
    updatedTasks.splice(index,1)
    setTasks(updatedTasks)
  }

  
function HandleComplete(index){
  let updatedTasks = [...tasks]
  updatedTasks[index].complete = true
  setTasks(updatedTasks)
}


  return (
    <div className='box'>
      <input type="text"
      value={input}
       placeholder='Enter task here'
       onChange={(e)=>setInput(e.target.value)}
      />

       <button onClick={HandleAdd}>
        Add
      </button>


      {tasks.map((task,index)=>(
        <div key={index}>
          <h1>{task.text}</h1>

          <button onClick={()=>HandleDelete(index)}>
            Delete
          </button>
          <button className='completeBtn' onClick={()=>HandleComplete(index)}>Complete</button>
          {task.complete && <p>Completed</p>}
          </div>
      ))}

    </div>
  )
}

export default TodoManager