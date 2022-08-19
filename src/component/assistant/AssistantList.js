import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, renderCell, styled } from '@mui/material'
import { useEffect, useState } from "react";
import { AssistantViewApi } from './api/AssistantViewApi';
import { Link, useHref } from 'react-router-dom';
import { AddAssistant } from './crud/AddAsisstant';
import ResponsiveAppBar from '../navbar/navbar';

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



const AllAssistant = () => {

    const [assistants, setAssistants] = useState([]);

    const assistantViewApi = new AssistantViewApi();

    async function getAssistants() {
        const response = await assistantViewApi.getAssistant();
        setAssistants(response.data);
    }

    useEffect(() => {
        getAssistants().then();
    }, []);

    async function deleteAssistants(id) {
        console.log(id);
        const response = await assistantViewApi.deleteAssistant(id);
        setAssistants(response.data);
    }

    return (
        <div>
            <StyledTable>
                <TableHead>
                    <THead>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Güncelle</TableCell>
                        <TableCell>Sil</TableCell>

                    </THead>
                </TableHead>
                <TableBody>
                    {assistants.map((assistant) => (
                        <TRow key={assistant.id}>
                            <TableCell>{assistant.id}</TableCell>
                            <TableCell>{assistant.name}</TableCell>
                            <TableCell>{assistant.surname}</TableCell>
                            <TableCell>{assistant.username}</TableCell>
                            <TableCell>{assistant.password}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} usehref={Link} to={`/edit/${assistant.id}`}>Edit</Button>
                            </TableCell>
                            <TableCell>
                                <Button color="secondary" variant="contained" onClick={() => deleteAssistants(assistant.id)}>Delete</Button>
                            </TableCell>
                        </TRow>
                    ))}
                </TableBody>
            </StyledTable>
        </div>

    )
}

export default AllAssistant;