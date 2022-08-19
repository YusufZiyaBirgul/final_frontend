import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, renderCell, styled } from '@mui/material'
import { useEffect, useState } from "react";
import { AcademicianViewApi } from './api/AcademicianViewApi';
import { Link, useHref } from 'react-router-dom';
import { AddAcademician } from './addAcademician/AddAcademician';

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



const AllAcademician = () => {
    const [academicians, setAcademician] = useState([]);

    const academicianViewApi = new AcademicianViewApi();

    async function getAcademicians() {
        const response = await academicianViewApi.getAcademician();
        setAcademician(response.data);
    }

    useEffect(() => {
        getAcademicians().then();
    }, []);

    async function deleteAcademicians(id) {
        console.log(id);
        const response = await academicianViewApi.deleteAcademician(id);
        setAcademician(response.data);
    }

    return (
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
                {academicians.map((academician) => (
                    <TRow key={academician.id}>
                        <TableCell>{academician.id}</TableCell>
                        <TableCell>{academician.name}</TableCell>
                        <TableCell>{academician.surname}</TableCell>
                        <TableCell>{academician.username}</TableCell>
                        <TableCell>{academician.password}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{ marginRight: 10 }} usehref={Link} to={`/edit/${academician.id}`}>Edit</Button>
                        </TableCell>
                        <TableCell>
                            <Button color="secondary" variant="contained" onClick={() => deleteAcademicians(academician.id)}>Delete</Button>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllAcademician;