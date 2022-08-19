import * as React from "react";
import {useState,useEffect,useNavigate} from "react";
import {useParams} from "react-router-dom";
//import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Stack} from "@mui/material";
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { StudentViewApi } from "../api/StudentViewApi";
const initialValue = {
  name: '',
  surname: '',
  email: '',
  username: '',
  password:''
}

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% 0 0 25%;
  & > div {
      margin-top: 20px
`;


const UpdateStudent = () => {
  const [student, setStudent] = useState(initialValue);
  const { name, surname, email, username,password } = student;
  const { id } = useParams();
  const [updateStudent,setUpdateStudent]=useState();

  const studentViewApi = new StudentViewApi();


  useEffect(() => {
      loadStudentDetails();
  }, []);

  const loadStudentDetails = async() => {
    console.log("id", id);
      const response = await studentViewApi.getStudentById(id);
      console.log("date", response.data);
      setStudent(response.data);
  }

  const editStudentDetails = async() => {
      const response = await studentViewApi.updateStudent(id, student);
  }

  const onValueChange = (e) => {
      console.log(e.target.value);
      setStudent({...student, [e.target.name]: e.target.value})
  }

  return (
      <Container>
          <Typography variant="h4">Edit Information</Typography>
          <FormControl>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">Studentname</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='surname' value={surname} id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">Email</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">Password</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">Password</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
              <Button variant="contained" color="primary" onClick={() => editStudentDetails()}>Edit Student</Button>
          </FormControl>
      </Container>
  )
}

export default UpdateStudent;