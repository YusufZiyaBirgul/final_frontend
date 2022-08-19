import React from "react";
import { useEffect,useState } from "react";
import { Table, TableHead, TableCell, TableRow, TableBody, Button,renderCell,styled } from '@mui/material';
import {Link,useHref} from 'react-router-dom';
import { ExamViewApi } from "./ExamViewApi";
const StyledTable = styled(Table)`
width: 90%;
margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
& > th {
    font-size: 20px;
    background: #000000;
    color: #FFFFFF;
}
`;

const TRow = styled(TableRow)` 
& > td{
    font-size: 18px
}
`;


const AllExams = () => {
const [lessons, setExams] = useState([]);  

const examViewApi = new ExamViewApi();

async function getLessons() {
const response = await examViewApi.getLessons();
setExams(response.data);
}

useEffect(() => {
getLessons().then();
}, []);

return (
    <StyledTable>
    <TableHead>
        <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Defination</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Room</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>Sınav Ekle</TableCell>
            <TableCell>Ödev Ekle</TableCell>


        </THead>
    </TableHead>
    <TableBody>
        {lessons.map((lesson) => (
            <TRow key={lesson.id}>
                <TableCell>{lesson.id}</TableCell>
                <TableCell>{lesson.name}</TableCell>
                <TableCell>{lesson.defination}</TableCell>
                <TableCell>{lesson.type}</TableCell>
                <TableCell>{lesson.code}</TableCell>
                <TableCell>{lesson.time}</TableCell>
                <TableCell>{lesson.room}</TableCell>
                <TableCell>{lesson.source}</TableCell>
                <TableCell>
                    <Button color="primary" variant="contained" style={{marginRight:10}} href={`/exam/${lesson.id}`}>Sınav Ekle</Button>
                </TableCell>
                <TableCell>
                    <Button color="primary" variant="contained" style={{marginRight:10}} href={`/homeworks/${lesson.id}`}>Ödev Ekle</Button>
                </TableCell>
                {/* <TableCell>
                  <Button color="secondary" variant="error" onClick={() => deleteLessons(lesson.id)}>Delete</Button> 
                </TableCell> */}
            </TRow>
        ))}
    </TableBody>
</StyledTable>

)
}

export default AllExams;