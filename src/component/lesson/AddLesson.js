import * as React from "react";
import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Stack } from "@mui/material";
import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
export function AddLesson(props) {

  const [formState, setFormState] = useState({});

  function onFormInputChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    const newState = { ...formState };
    newState[field] = value;
    setFormState(newState);
  }

  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>Add new lesson</DialogTitle>
      <DialogContent>
        <TextField onChange={onFormInputChange} name="name" label="Name" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="defination" label="Defination" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="type" label="type" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="code" label="code" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="time" label="time" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="room" label="room" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="source" label="sorurce" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="academicianId" label="academician id" fullWidth></TextField>
       
        <TextField onChange={onFormInputChange} name="assistantId" label="assistant id" fullWidth></TextField>
       
  
      </DialogContent>
      <DialogActions>

        <Stack spacing={2} direction="row">
          <Button onClick={() => props.close()} color="secondary">Cancel</Button>
          <Button onClick={() => props.addLesson(formState)}>Submit</Button>
        </Stack>


      </DialogActions>
    </Dialog>
  );
}
