import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Container } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', minWidth: 150 },
    { field: 'lastName', headerName: 'Last name', minWidth: 150 },
    { field: 'age', headerName: 'Age', type: 'number', width: 110 },
    { field: 'fullName', headerName: 'Full name', minWidth: 200 },
    { field: 'email', headerName: 'Email' , minWidth: 500,flex: 1 },
    { field: 'phone', headerName: 'Phone', minWidth: 150 },
    { field: 'address', headerName: 'Address', minWidth: 250 },
    { field: 'city', headerName: 'City', minWidth: 150 },
    { field: 'country', headerName: 'Country', minWidth: 150 },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, fullName: 'Jon Snow', email: 'jon.snow@example.com', phone: '123-456-7890', address: 'Winterfell', city: 'North', country: 'Westeros' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, fullName: 'Cersei Lannister', email: 'cersei.lannister@example.com', phone: '123-456-7891', address: 'Red Keep', city: 'King\'s Landing', country: 'Westeros' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, fullName: 'Jaime Lannister', email: 'jaime.lannister@example.com', phone: '123-456-7892', address: 'Red Keep', city: 'King\'s Landing', country: 'Westeros' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, fullName: 'Arya Stark', email: 'arya.stark@example.com', phone: '123-456-7893', address: 'Winterfell', city: 'North', country: 'Westeros' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, fullName: 'Daenerys Targaryen', email: 'daenerys.targaryen@example.com', phone: '123-456-7894', address: 'Dragonstone', city: 'Dragonstone', country: 'Westeros' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, fullName: 'Melisandre', email: 'melisandre@example.com', phone: '123-456-7895', address: 'Asshai', city: 'Shadowlands', country: 'Essos' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, fullName: 'Ferrara Clifford', email: 'ferrara.clifford@example.com', phone: '123-456-7896', address: 'Braavos', city: 'Free Cities', country: 'Essos' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, fullName: 'Rossini Frances', email: 'rossini.frances@example.com', phone: '123-456-7897', address: 'Pentos', city: 'Free Cities', country: 'Essos' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, fullName: 'Harvey Roxie', email: 'harvey.roxie@example.com', phone: '123-456-7898', address: 'Volantis', city: 'Free Cities', country: 'Essos' },
];

export default function DataTable() {
    return (
        <Container>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                    disableRowSelectionOnClick
                    sx={{
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: '#f5f5f5',
                        },
                        '& .MuiDataGrid-cell': {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        },
                    }}
                />
            </Box>
        </Container>
    );
}
