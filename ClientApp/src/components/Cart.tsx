import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Link, Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/system';

const ProductCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: theme.spacing(2),
}));

const ProductImage = styled(CardMedia)({
    height: 140,
});

interface Product {
    image: string;
    name: string;
    description: string;
    price: string;
}

interface ProductCardComponentProps {
    product: Product;
}

const ProductCardComponent = () => {
    return (
        <>
            <Box
                sx={{
                    padding: 2,
                    border: '1px solid',
                    borderColor: 'grey.300',
                    borderRadius: 1,
                    backgroundColor: '#f5f5f5',
                    margin: 1,
                    justifyContent: 'flex-start',
                }}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center">
                    <Link href="/">
                        <img src="https://oms-vista.vn/kintai/Images/attendance.png" alt="image" />
                    </Link>
                </Box>
                <Grid container spacing={2}  justifyContent="center">
                    <Typography variant="h5" gutterBottom sx={{ justifyContent: 'center' }}>
                        Subject
                    </Typography>
                </Grid>
                <Grid container spacing={2}  justifyContent="center">
                    <Button size="small" variant="outlined" color='success'>
                        View Details
                    </Button>
                </Grid>
            </Box>
        </>

    );
};

export default ProductCardComponent;
