import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Stack } from "@mui/material";
import { FormGroup, FormControl, InputLabel, Input, styled, Typography } from '@mui/material';
import { useState, useEffect, useNavigate } from "react";
import { useParams } from "react-router-dom";

import { ExamViewApi } from "./ExamViewApi";

const initialValue = {
    defination: '',
    PDF: '',
    endTime: '',
    assistantId: '',
    assistantName: ''
}

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% 0 0 25%;
  & > div {
      margin-top: 20px
`;


const AddHomework = () => {
    const { lessonId } = useParams();
    const [homework, setHomework] = useState({ ...initialValue, lessonId: lessonId });
    const [assistantId, setAssistant] = useState([]);
    const [currentAssistant, currentSetAssistant] = useState();
    const { defination, PDF, endTime } = homework;
    const [updateStudent, setUpdateStudent] = useState();

    const examViewApi = new ExamViewApi();

    const AddHomework = async () => {
        const response = await examViewApi.addHomework(homework);
    }
    async function getAssistant() {
        const response = await examViewApi.getAssistant();
        console.log(response.data);
        setAssistant(response.data);
    }

    useEffect(() => {
        getAssistant();
    }, [])

    const onValueChange = (e) => {
        console.log(e.target.value);
        setHomework({ ...homework, [e.target.name]: e.target.value })
    }

    async function onClickAssistant(id) {
        const response = await examViewApi.getAssistantById(id);
        console.log(id);
        currentSetAssistant(response.data);
    }

    return (
        <Container>

            <Typography variant="h4">Ödev Ekle </Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Açıklama</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='defination' id="my-input" value={defination} aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">ÖDEV TESLİM</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='PDF' id="my-input" value={PDF} aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Son Teslim Tarihi</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='endTime' id="my-input" value={endTime} aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Sorumlu Asistan</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='assistantId' id="my-input" value={assistantId[1]} aria-describedby="my-helper-text" />
            </FormControl>

            

            <FormControl>
                <InputLabel htmlFor="my-input">Lesson Id</InputLabel>
                <Input name='lessonId' id="my-input" value={lessonId} disabled aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => AddHomework()}>Save Homewwork</Button>
            </FormControl>

        </Container>

    )
}

export default AddHomework;