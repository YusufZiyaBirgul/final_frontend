
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { StudentView } from '../student/api/StudentView';
import { AssistantView } from '../assistant/view/AssistantView';
import { AcademicianView } from '../academician/view/AcademicianView';


const ResponsiveAppBar = () => {
  const [users, setUsers] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color='success'>
      <Toolbar>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Button href="./StudentView"> Student</Button>
          </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button href="./AssistantView">Assistant</Button>
          </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button href="./AcademicianView">Academician</Button>
           </MenuItem>
           <MenuItem onClick={handleClose}>
          <Button href="./LessonView">Lesson</Button>
           </MenuItem>
           <MenuItem onClick={handleClose}>
          <Button href="./ExamView">Exam</Button>
           </MenuItem>
 </Menu> 
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;

