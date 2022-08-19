import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Stack } from "@mui/material";
import { FormGroup, FormControl, InputLabel, Input, styled, Typography } from '@mui/material';
import {useState,useEffect,useNavigate} from "react";
import {useParams} from "react-router-dom";

import { ExamViewApi } from "./ExamViewApi";

const initialValue = {
  name: '',
  room: '',
  time: '',
  info: ''
}

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% 0 0 25%;
  & > div {
      margin-top: 20px
`;


const AddExam = () => {
    const { lessonId } = useParams();
    const [exam, setExam] = useState({...initialValue, lessonId: lessonId});
  const { name, room, time, info } = exam;
  const [updateStudent,setUpdateStudent]=useState();

  const studentViewApi = new ExamViewApi();  

  const addExam = async() => {
      const response = await studentViewApi.addExam(exam);
  }

  const onValueChange = (e) => {
      console.log(e.target.value);
      setExam({...exam, [e.target.name]: e.target.value})
  }

  return (
      <Container>
          <Typography variant="h4">Sınav Ekle </Typography>
          <FormControl>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='name' id="my-input" value={name}  aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">Room</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='room' id="my-input" value={room}  aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">Time</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='time' id="my-input" value={time}  aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">İnfo</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='info' id="my-input" value={info}  aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
              <InputLabel htmlFor="my-input">Lesson Id</InputLabel>
              <Input name='lessonId' id="my-input" value={lessonId} disabled aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
              <Button variant="contained" color="primary" onClick={() => addExam()}>Save Exam</Button>
          </FormControl>
      </Container>
  )
}

export default AddExam;