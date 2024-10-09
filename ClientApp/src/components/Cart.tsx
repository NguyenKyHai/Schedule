import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Link } from '@mui/material';
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
        <ProductCard sx={{ justifyContent: 'center' }}>
            <Link href="/">
                <img src="https://oms-vista.vn/kintai/Images/attendance.png" alt="image" />
            </Link>
            <CardContent sx={{ justifyContent: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                    Subject
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Add to Cart
                </Button>
                <Button size="small" color="secondary">
                    View Details
                </Button>
            </CardActions>
        </ProductCard>
    );
};

export default ProductCardComponent;
