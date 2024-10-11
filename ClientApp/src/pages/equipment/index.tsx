import React, { useState } from 'react';
import {
  Container, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent,
  Box,
  Button,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import TextInput from '../../components/TextInput';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef, GridRowClassNameParams, GridRowParams, GridRowSpacingParams } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  evenRow: {
    backgroundColor: 'white',
  },
  oddRow: {
    backgroundColor: '#f5f5f5',
  },
});


type Condition = 'all' | 'name' | 'category';

const Equipment: React.FC = () => {

  const classes = useStyles();
  const [condition, setCondition] = useState<Condition>('all');
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, flex: 1, headerAlign: 'center' },
    { field: 'name', headerName: 'Name', width: 150, flex: 1, headerAlign: 'center' },
    { field: 'age', headerName: 'Age', type: 'number', width: 110, flex: 1, headerAlign: 'center' },
    { field: 'address', headerName: 'Address', width: 160, flex: 1, headerAlign: 'center' },
  ];

  const rows = [
    { id: 1, name: 'John Doe', age: 35, address: '123 Main St' },
    { id: 2, name: 'Jane Smith', age: 42, address: '456 Maple Ave' },
    { id: 3, name: 'Alice Johnson', age: 28, address: '789 Oak Dr' },
  ];

  const handleConditionChange = (event: SelectChangeEvent) => {
    setCondition(event.target.value as Condition);
  };

  return (
    <Container fixed>
      <Box
        sx={{
          padding: 2,
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 1,
          backgroundColor: '#f5f5f5',
          marginBottom: 2,
        }}
      >    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
          <Typography variant="h5" gutterBottom sx={{ justifyContent: 'center' }}>
            Màn hình
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid sx={{ xs: 12, md: 3 }}>
            <TextInput label='Text Field 1' size='small' />
          </Grid>
          <Grid sx={{ xs: 12, md: 3 }}>
            <TextInput label='Text Field 2' size='small' />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Box sx={{ width: '20%' }}>
            <FormControl variant="outlined" margin="normal" fullWidth>
              <InputLabel>Condition</InputLabel>
              <Select
                value={condition}
                onChange={handleConditionChange}
                label="Condition" size='small'
                sx={{
                  backgroundColor: 'white', width: '100%'
                }}>
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="category">Category</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Button variant="outlined" color='success' startIcon={<SearchIcon color="success" />}>
            Search
          </Button>
          <Button variant="outlined" startIcon={<DeleteIcon color="primary" />}>
            Clear
          </Button>
        </Grid>
      </Box>
      <Box sx={{ width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 4,
              },
            },
          }}
          pageSizeOptions={[4]}
          checkboxSelection
          disableRowSelectionOnClick
          getRowClassName={(params: GridRowClassNameParams) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? classes.evenRow : classes.oddRow
          }
          sx={{
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'red',
              borderBottom: '2px solid rgba(224, 224, 224, 1)',
            },
            '& .MuiDataGrid-cell': {
              borderRight: '1px solid rgba(224, 224, 224, 1)',
            },
            '& .MuiDataGrid-row': {
              borderBottom: '1px solid rgba(224, 224, 224, 1)',
            },
          }}
        />
      </Box>
    </Container>
  );
};

export default Equipment;
