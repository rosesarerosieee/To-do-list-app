import React, { useState, useCallback, useEffect } from 'react';
import './input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Input() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [alertShown, setAlertShown] = useState(false);
  const [taskAddedOrDeleted, setTaskAddedOrDeleted] = useState(false); // New state variable

  const AddingTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim() || tasks.length >= 10) return;
    const newTask = { id: Date.now(), text: taskInput, completed: false };
    setTasks([...tasks, newTask]);
    setTaskInput("");
    setTaskAddedOrDeleted(true); // Set state to indicate task added
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setTaskAddedOrDeleted(true); // Set state to indicate task deleted
  };

  const toggleTaskCompletion = useCallback((taskId) => {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  }, []);

  useEffect(() => {
    if (tasks.length >= 10 && !alertShown && taskAddedOrDeleted) { // Only show alert if task added or deleted
      setAlertShown(true);
      alert("You've reached the limit of 10 tasks. Delete some tasks to add more.");
    }
    setTaskAddedOrDeleted(false); // Reset state after alert check
  }, [tasks, alertShown, taskAddedOrDeleted]);

  return (
    <>
      <div className='Inputt'>
        {/* Adding tasks */}
        <div className='Add'>
          <form onSubmit={AddingTask}>
            <input value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
            <div className='submit'>
              <button type='submit' disabled={tasks.length >= 10}>Add task</button>
            </div>
          </form>
        </div>

      {/* Done and Removing */}

      <div className='Completion'>
  <ul className='taskk'>
    {tasks.map((task) => (
      <li className='tasks' key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        

        <div className='task' onClick={() => toggleTaskCompletion(task.id)} style={{ display: 'inline-block', marginRight: '10px' }}>
          {task.text}
        </div>
      
        <div className='trash' onClick={(e) => {
          e.stopPropagation(); 
          deleteTask(task.id);
        }}>

          <FontAwesomeIcon icon={faTrash} />
        </div>

      </li>
    ))}
  </ul>
</div>




      </div>

     
    </>
  );
}

export default Input;
