import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState('');
  const [loginAlert, setLoginAlert] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Make an API request to authenticate the user
    axios
      .post('https://taskmanager-hareesh2k1.onrender.com/login', {
        username,
        password,
      })
      .then((response) => {
        // Handle successful login
        console.log(response.data);
        setLoggedIn(true);
        setLoginAlert('Login successful');
        fetchTasks();
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
        setLoginAlert('Login failed');
      });
  };

  const fetchTasks = () => {
    // Make an API request to fetch tasks
    axios
    .get(`https://taskmanager-hareesh2k1.onrender.com/tasks/`, {
        title: "First Task",
      })
      .then((response) => {
        // Handle successful task update
        console.log(response.data);
        setTasks('');
        fetchTasks();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAddTask = () => {
    // Make an API request to add a new task
    axios
      .post('https://taskmanager-hareesh2k1.onrender.com/tasks', {
        title: newTask,
      })
      .then((response) => {
        // Handle successful task addition
        console.log(response.data);
        setNewTask('');
        fetchTasks();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditTask = (taskId, updatedTask) => {
    // Make an API request to update a task
    axios
      .put(`https://taskmanager-hareesh2k1.onrender.com/tasks/${taskId}`, {
        title: updatedTask,
      })
      .then((response) => {
        // Handle successful task update
        console.log(response.data);
        setEditTaskId('');
        fetchTasks();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteTask = (taskId) => {
    // Make an API request to delete a task
    axios
      .delete(`https://taskmanager-hareesh2k1.onrender.com/tasks/${taskId}`)
      .then((response) => {
        // Handle successful task deletion
        console.log(response.data);
        fetchTasks();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Clear login alert after 3 seconds
    const timer = setTimeout(() => {
      setLoginAlert('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [loginAlert]);

  if (!loggedIn) {
    return (
      <div className="login-container">
        <h1>Login</h1>
        {loginAlert && <div className="alert">{loginAlert}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        /><br/><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        /><br/><br/>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div className="tasks-container">
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editTaskId === task.id ? (
              <input
                type="text"
                value={task.title}
                onChange={(e) => handleEditTask(task.id, e.target.value)}
              />
            ) : (
              task.title
            )}
            <button onClick={() => setEditTaskId(task.id)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default Login;







