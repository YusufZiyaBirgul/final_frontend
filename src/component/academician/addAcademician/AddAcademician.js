import * as React from "react";
import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Stack} from "@mui/material";

export function AddAcademician(props) {

  const [formState, setFormState] = useState({});

  function onFormInputChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    const newState = {...formState};
    newState[field] = value;
    setFormState(newState);
  }

  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>Add new academician</DialogTitle>
      <DialogContent>
        <TextField onChange={onFormInputChange} name="name" label="Name" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="surname" label="Surname" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="username" label="Username" fullWidth></TextField>
        <TextField onChange={onFormInputChange} name="password" label="Password" fullWidth></TextField>
      </DialogContent>
      <DialogActions>
     
      <Stack spacing={2} direction="row">
      <Button onClick={() => props.close()} color="secondary">Cancel</Button>
        <Button onClick={() => props.addAcademician(formState)}>Submit</Button>
    </Stack>

        
      </DialogActions>
    </Dialog>
  );
}
