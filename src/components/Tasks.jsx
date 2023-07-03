import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleCreateTask = () => {
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      status: 'ongoing',
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setTaskDescription('');
  };

  const handleUpdateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Task Manager
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              fullWidth
              value={taskTitle}
              onChange={handleTaskTitleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={taskDescription}
              onChange={handleTaskDescriptionChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="button"
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleCreateTask}
              fullWidth
            >
              Create Task
            </Button>
          </Grid>
        </Grid>
      </form>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            disableGutters
            divider
            secondaryAction={
              <div>
                <IconButton
                  edge="end"
                  aria-label="update"
                  onClick={() => handleUpdateTask(index, task)}
                >
                  <UpdateIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteTask(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            }
          >
            <ListItemText
              primary={task.title}
              secondary={task.description}
            />
            <ListItemText primary={task.status} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Tasks;