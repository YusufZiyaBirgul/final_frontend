import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Table, TableHead, TableCell, TableRow, TableBody, Button,renderCell,styled } from '@mui/material'
import { useEffect,useState} from "react";
import { LessonViewApi } from "./LessonViewApi";
import {Link,useHref} from 'react-router-dom';

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


const AllLessons = () => {
  const [lessons, setLessons] = useState([]);  

  const lessonViewApi = new LessonViewApi();

  async function getLessons() {
    const response = await lessonViewApi.getLesson();
    setLessons(response.data);
  }

  useEffect(() => {
    getLessons().then();
  }, []);

  async function deleteLessons(id) {
    console.log(id);
    const response = await lessonViewApi.deleteLesson(id);
    setLessons(response.data);
  }
 

  // const getAllUsers = async () => {
  //     let response = await getUsers();
  //     setUsers(response.data);
  // }

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
                  <TableCell>Güncelle</TableCell>
                  <TableCell>Sil</TableCell>

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
                          <Button color="primary" variant="contained" style={{marginRight:10}} usehref={Link} to={`/edit/${lesson.id}`}>Edit</Button>
                      </TableCell>
                      <TableCell>
                        <Button color="secondary" variant="error" onClick={() => deleteLessons(lesson.id)}>Delete</Button> 
                      </TableCell>
                     
                  </TRow>
              ))}
          </TableBody>
      </StyledTable>
    
     
  )
}

export default AllLessons;