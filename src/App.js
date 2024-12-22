import React, {useState} from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const  [newTask, setNewTask] = useState('');

  const handelAddText = () => {
    if(newTask.trim() !== "" ){
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };
  const handelRemoveText = (index ) => {
    const updateTasks = tasks.filter((_,i) => i !== index);
    setTasks(updateTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src='to-do-list-svgrepo-com.png' className="App-logo" alt="logo" />
        <p className='App-name'>
          To-Do list.
        </p>
      </header>
      <main className='App-body'>
        <p className='welcome-text'>
          Welcome to your personal To to list.
        </p>
        <div className='to-do-container'>
          <p className='Add-text'>
            {
              tasks.length === 0
              ? "Looks like the list is empty."
              :  "Here are your tasks."
            }
          </p>
          <div className='Input-container'>
            <input
              className='input-box'
              type='text'
              placeholder='Enter a New Task' 
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className='Add-button' onClick={handelAddText}>
              <img className='add' src='/pics/add.svg' alt='add'/>
            </button>
          </div>
          <ul>
            {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button 
                className='Remove-button' 
                onClick={() => handelRemoveText(index)}
              >
                <img 
                  className='remove'
                  src='/pics/remove.svg'
                  alt='remove'  
                />
              </button>
            </li>
            ))}
          </ul>

        </div>
      </main>
    </div>
  );
}

export default App;
