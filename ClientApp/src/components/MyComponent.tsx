import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalFormProps {
  open: boolean;
  handleClose: () => void;
  handleSave: (data: string) => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ open, handleClose, handleSave }) => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleSubmit = () => {
    handleSave(inputValue);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Modal title
        </Typography>
        <TextField
          label="Input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        />
        <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
          Save changes
        </Button>
      </Box>
    </Modal>
  );
};

const MyComponent: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState<string>('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = (data: string) => setFormData(data);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
        Data from Modal: {formData}
      </Typography>
      <ModalForm open={open} handleClose={handleClose} handleSave={handleSave} />
    </div>
  );
};

export default MyComponent;
