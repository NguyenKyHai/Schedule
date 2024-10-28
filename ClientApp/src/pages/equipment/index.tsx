import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Container, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent,
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef, GridRowClassNameParams } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import EditButton from '../../components/EditButton';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import EquipmentSearch from '../search/equipment';
import { Active, All, Deleted, SearchCode } from '../../commonModel/commonModel';
import { useApiGetQuery } from '../../api/commonApi';
import { EquipmentSearchModel, initEquipmentSearch } from './equipmentModel';
import { formatDateTime } from '../../utils/commonUtil';

const useStyles = makeStyles({
  evenRow: {
    backgroundColor: 'white',
  },
  oddRow: {
    backgroundColor: '#f5f5f5',
  },
});

const Equipment: React.FC = () => {
  const equipList = useApiGetQuery({ url: 'equipment/all' });
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [equipValues, setEquipValues] = React.useState<EquipmentSearchModel>(initEquipmentSearch);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSelect = (data: SearchCode) => {
    setEquipValues({ ...equipValues, equipmentCD: data.code, equipmentName: data.name });
  }
  const columns: GridColDef[] = [
    {
      field: 'edit',
      headerName: 'Edit',
      width: 64,
      align: 'center',
      renderCell: (params) => <EditButton {...params} />,
    },
    { field: 'equipmentCD', headerName: 'Mã thiết bị', headerAlign: 'center', minWidth: 120, flex: 1 },
    { field: 'equipmentName', headerName: 'Tên thiết bị', headerAlign: 'center', minWidth: 250, flex: 1 },
    { field: 'groupName', headerName: 'Nhóm thiết bị', headerAlign: 'center', minWidth: 250, flex: 1 },
    {
      field: 'statusFlag',
      headerName: 'Trạng thái',
      headerAlign: 'center',
      minWidth: 140,
      flex: 1,
      valueGetter: (value) => { return value === 0 ? 'Đang hoạt động' : 'Đã xóa' },
    },
    {
      field: 'createDate',
      headerName: 'Ngày tạo',
      headerAlign: 'center',
      minWidth: 170,
      flex: 1,
      valueGetter: (value) => { return formatDateTime(value) },
    },
    {
      field: 'updateDate',
      headerName: 'Ngày cập nhật',
      headerAlign: 'center',
      minWidth: 170,
      flex: 1,
      valueGetter: (value) => { return formatDateTime(value) },
    },
    { field: 'createUID', headerName: 'Người tạo', headerAlign: 'center', minWidth: 120, flex: 1 },
    { field: 'updateUID', headerName: 'Người cập nhật', headerAlign: 'center', minWidth: 120, flex: 1 },
  ];

  const row = [{ id: 1, name: 'John' }, { id: 2, name: 'Tom' }]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEquipValues({
      ...equipValues,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log('Equipment');
    console.log(equipList);
  }, [equipList]);

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
              name="equipmentCD"
              value={equipValues.equipmentCD}
              variant="outlined"
              size='small'
              onChange={handleChange}
              sx={{
                backgroundColor: 'white',
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton onClick={handleOpen}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth
              id="outlined-required txtEquipmentName"
              label='Tên thiết bị'
              name="equipmentName"
              value={equipValues.equipmentName}
              variant="outlined"
              size='small'
              onChange={handleChange}
              sx={{
                backgroundColor: 'white',
              }} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth
              id="outlined-required txtGroupName"
              label='Nhóm thiết bị'
              name="groupName"
              value={equipValues.groupName}
              variant="outlined"
              size='small'
              onChange={handleChange}
              sx={{
                backgroundColor: 'white',
              }}
            // slotProps={{
            //   inputLabel: {shrink: true }
            // }}
            />
          </Grid>

        </Grid>
        <Grid container spacing={2} alignItems={'center'} marginTop={2}>
          <Grid size={{ xs: 12, md: 2 }}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Trạng thái</InputLabel>
              <Select
                value={equipValues.statusFlag}
                onChange={(event: SelectChangeEvent) => setEquipValues({
                  ...equipValues,
                  statusFlag: event.target.value,
                })}
                name="statusFlag"
                label="Condition"
                sx={{
                  backgroundColor: 'white', width: '100%'
                }}>
                <MenuItem value={All}>Tất cả</MenuItem>
                <MenuItem value={Active}>Đang hoạt động</MenuItem>
                <MenuItem value={Deleted}>Đã xóa</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <DatePicker
              label="Ngày tạo"
              value={equipValues.createDate}
              onChange={(newValue: Dayjs | null) => setEquipValues({
                ...equipValues,
                createDate: newValue
              })}
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
              value={equipValues.updateDate}
              onChange={(newValue: Dayjs | null) => setEquipValues({
                ...equipValues,
                updateDate: newValue
              })}
              slotProps={{ textField: { size: 'small' } }}
              sx={{
                backgroundColor: 'white'
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Người tạo</InputLabel>
              <Select
                name="createUID"
                value={equipValues.createUID}
                onChange={(event: SelectChangeEvent) => setEquipValues({
                  ...equipValues,
                  createUID: event.target.value,
                })}
                label="Create user"
                sx={{
                  backgroundColor: 'white', width: '100%'
                }}>
                {row?.map((item: any) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Người cập nhật</InputLabel>
              <Select
                name="updateUID"
                value={equipValues.updateUID}
                onChange={(event: SelectChangeEvent) => setEquipValues({
                  ...equipValues,
                  updateUID: event.target.value,
                })}
                label="Update User"
                sx={{
                  backgroundColor: 'white', width: '100%'
                }}>
                {row?.map((item: any) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Button variant="outlined" color='success' startIcon={<SearchIcon color="success" />} onClick={() => setEquipValues(initEquipmentSearch)}>
            Search
          </Button>
          <Button variant="outlined" startIcon={<DeleteIcon color="primary" />} onClick={() => setEquipValues(initEquipmentSearch)}>
            Clear
          </Button>
        </Grid>
      </Box>
      <div style={{ display: 'flex', width: '100%', overflow: 'auto' }}>
        <DataGrid
          rows={equipList.data?.data}
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
          loading={equipList.isLoading}
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
      </div>
      <EquipmentSearch open={open} handleClose={handleClose} handleSelect={handleSelect} />
    </Container>
  );
};

export default Equipment;
