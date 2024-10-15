import React, { useEffect, useState } from 'react';
import {
  Container, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent,
  Box,
  Button,
  Typography,
  TextField
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef, GridRowClassNameParams } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import EditButton from '../../components/EditButton';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

const useStyles = makeStyles({
  evenRow: {
    backgroundColor: 'white',
  },
  oddRow: {
    backgroundColor: '#f5f5f5',
  },
});


type Condition = "-1" | "0" | "1";

const Equipment: React.FC = () => {

  const classes = useStyles();
  const [condition, setCondition] = useState<Condition>("-1");
  const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null);
  const columns: GridColDef[] = [
    {
      field: 'edit',
      headerName: 'Edit',
      width: 64,
      align: 'center',
      renderCell: (params) => <EditButton {...params} />,
    },
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

  useEffect(() => {
    console.log('Equipment');
  }, []);

  return (
    <Container>
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
            Danh sách các thiết bị
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField fullWidth
              id="outlined-required txtEquipmentCD"
              label='Mã thiết bị'
              variant="outlined"
              size='small'
              sx={{
                backgroundColor: 'white',
              }} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth
              id="outlined-required txtEquipmentName"
              label='Tên thiết bị'
              variant="outlined"
              size='small'
              sx={{
                backgroundColor: 'white',
              }} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth
              id="outlined-required txtGroupName"
              label='Nhóm thiết bị'
              variant="outlined"
              size='small'
              sx={{
                backgroundColor: 'white',
              }} />
          </Grid>

        </Grid>
        <Grid container spacing={2} alignItems={'center'} marginTop={2}>
          <Grid size={{ xs: 12, md: 2 }}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Trạng thái</InputLabel>
              <Select
                value={condition}
                onChange={handleConditionChange}
                label="Condition" 
                size='small'
                sx={{
                  backgroundColor: 'white', width: '100%'
                }}>
                <MenuItem value="-1">Tất cả</MenuItem>
                <MenuItem value="0">Đang hoạt động</MenuItem>
                <MenuItem value="1">Đã xóa</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <DatePicker
              label="Ngày khởi tạo"
              value={startDate}
              onChange={(newValue: Dayjs | null) => setStartDate(newValue)}
              slotProps={{ textField: { size: 'small' } }}
              sx={{
                backgroundColor: 'white'
              }}
            />
          </Grid>
          <InputLabel>~</InputLabel>
          <Grid size={{ xs: 12, md: 2 }}>
            <DatePicker
              label="Ngày cập nhật"
              value={endDate}
              onChange={(newValue: Dayjs | null) => setEndDate(newValue)}
              slotProps={{ textField: { size: 'small' } }}
              sx={{
                backgroundColor: 'white'
              }}
            />
          </Grid>
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
