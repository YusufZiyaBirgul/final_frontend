import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, renderCell, styled } from '@mui/material'
import { useEffect, useState } from "react";
import { StudentViewApi } from "./StudentViewApi";
import { Link, useHref } from 'react-router-dom';

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

const AllStudents = (props) => {
    const [isUpdateStudentDialogOpen, setUpdateStudentDialogOpen] = useState();

    const studentViewApi = new StudentViewApi();

    async function deleteStudents(id) {
        console.log(id);
        const response = await studentViewApi.deleteStudent(id);
        console.log("del", response);
        props.getStudents();
        // setStudents(response.data);
    }

    async function updateStudent(formState, id) {
        const response = await studentViewApi.updateStudent(formState);
        const messageResponse = response.data;
        if (messageResponse.responseType === "SUCCESS") {

            setUpdateStudentDialogOpen(false);
        }
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
                    <TableCell>Surname</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Güncelle</TableCell>
                    <TableCell>Sil</TableCell>

                </THead>
            </TableHead>
            <TableBody>
                {props.students.map((student) => (
                    <TRow key={student.id}>
                        <TableCell>{student.id}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.surname}</TableCell>
                        <TableCell>{student.username}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.password}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" href={`/edit/${student.id}`}>Edit</Button>
                            
                        </TableCell>
                        <TableCell>
                            <Button color="secondary" variant="contained" onClick={() => deleteStudents(student.id)}>Delete</Button>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllStudents;