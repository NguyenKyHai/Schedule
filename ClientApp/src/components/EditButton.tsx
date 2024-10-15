import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { GridRenderCellParams } from '@mui/x-data-grid';

const EditButton: React.FC<GridRenderCellParams> = (params) => {
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate(`/details/${params.id}`);
    };

    return (
        <IconButton onClick={handleEditClick}>
            <EditIcon color='primary'/>
        </IconButton>
    );
};
export default EditButton;