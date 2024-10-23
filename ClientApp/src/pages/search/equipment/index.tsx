import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import { DataGrid, GridCellParams, GridColDef, GridRenderCellParams, GridRowClassNameParams } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, IconButton } from '@mui/material';
import { SearchCode } from '../../../commonModel/commonModel';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

const useStyles = makeStyles({
  evenRow: {
    backgroundColor: 'white',
  },
  oddRow: {
    backgroundColor: '#f5f5f5',
  },
});

interface ModalFormProps {
  open: boolean;
  handleClose: () => void;
  handleSelect: (data: SearchCode) => void;
}

const EquipmentSearch: React.FC<ModalFormProps> = ({ open, handleClose, handleSelect }) => {
  const classes = useStyles();

  const columns: GridColDef[] = [
    {
      field: 'select',
      headerName: 'Select',
      width: 64,
      align: 'center',
      renderCell: (params) => {
        return (
          <IconButton onClick={() => {

          }}>
            <SystemUpdateAltIcon color='primary' />
          </IconButton>)
      },
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
  const handleCellClick = (params: GridCellParams) => {
    handleSelect({
      code: params.row.id,
      name: params.row.name
    });
    handleClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40vw',
            bgcolor: 'background.paper',
            border: '2px',
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box>
            <Typography variant="h4" align="center" gutterBottom>
              Danh sách các thiết bị
            </Typography>
          </Box>
          <Box mt={1} border={1} borderColor="grey.500" borderRadius={1} p={1}>
            <Grid container spacing={2}>
              <Grid>
                <TextField fullWidth
                  id="outlined-required txtEquipmentCDSearch"
                  label='Mã thiết bị'
                  variant="outlined"
                  size='small'
                  sx={{
                    backgroundColor: 'white',
                  }}
                />
              </Grid>
              <Grid>
                <TextField fullWidth
                  id="outlined-required txtEquipmentNameSearch"
                  label='Tên thiết bị'
                  variant="outlined"
                  size='small'
                  sx={{
                    backgroundColor: 'white',
                  }} />
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
          <Box sx={{ width: '100%', marginTop: 2 }}>
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
              disableRowSelectionOnClick
              onCellClick={handleCellClick}
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
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 'auto' }}>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Button onClick={handleClose} variant="contained" color="primary">
                Close
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default EquipmentSearch;