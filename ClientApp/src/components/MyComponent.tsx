import React, { useState } from 'react';
import { Button, Modal, Box, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';


interface DataGridModalProps {
  onChoose: (data: any) => void;
}

const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, message: 'Hello!' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25, message: 'Hi there!' },
  // Thêm nhiều dòng dữ liệu khác nếu cần
];

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'message', headerName: 'Message', width: 200 },
  {
      field: 'choose',
      headerName: 'Choose',
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
          <Button variant="contained" onClick={() => params.api.getRow(params.id)}>
              Choose
          </Button>
      ),
  },
];

const DataGridModal: React.FC<DataGridModalProps> = ({ onChoose }) => {
  const handleChoose = (id: number) => {
      const selectedRow = rows.find(row => row.id === id);
      if (selectedRow) {
          onChoose(selectedRow);
      }
  };

  return (
      <div style={{ height: 400, width: '100%' }}>
          <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }} 
              pageSizeOptions={[4]}
              onCellClick={(params) => {
                  if (params.field === 'choose') {
                      handleChoose(params.id as number);
                  }
              }}
          />
      </div>
  );
};

const MyComponent: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [selectedData, setSelectedData] = useState<any>(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChoose = (data: any) => {
        setSelectedData(data);
        handleClose();
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Open DataGrid Modal
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ width: 600, height: 400, margin: 'auto', marginTop: '10%' }}>
                    <DataGridModal onChoose={handleChoose} />
                </Box>
            </Modal>
            {selectedData && (
                <Box mt={2}>
                    <TextField label="Name" value={selectedData.name} variant="outlined" fullWidth margin="normal" />
                    <TextField label="Email" value={selectedData.email} variant="outlined" fullWidth margin="normal" />
                    <TextField label="Age" value={selectedData.age} variant="outlined" fullWidth margin="normal" />
                    <TextField label="Message" value={selectedData.message} variant="outlined" fullWidth margin="normal" />
                </Box>
            )}
        </div>
    );
};

export default MyComponent;
