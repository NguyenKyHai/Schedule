import { Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface ICardComponentProp {
    linkAddress: string,
    imgSource: string,
    subject: string,
    description: string,
}

const CardComponent = (props: ICardComponentProp) => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log('CardComponent');
    }, []);
    const handleClick = () => {
        navigate(props.linkAddress, { replace: true });
    }
    return (
        <>
            <Box
                sx={{
                    padding: 1,
                    border: '1px solid',
                    borderColor: 'grey.300',
                    borderRadius: 2,
                    backgroundColor: '#f5f5f5',
                    margin: 1,
                    justifyContent: 'flex-start',
                    width: '30%',
                }}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center">
                    <Link to={props.linkAddress}>
                        <Box
                            component="img"
                            src={props.imgSource}
                            alt="image"
                        />
                    </Link>
                </Box>
                <Grid container spacing={2} justifyContent="center">
                    <Typography variant="h5" gutterBottom sx={{ justifyContent: 'center' }}>
                        {props.description}
                    </Typography>
                </Grid>
                <Grid container spacing={2} justifyContent="center">
                    <Button size="small" variant="outlined" color='success' onClick={handleClick}>
                        {props.subject}
                    </Button>
                </Grid>
            </Box>
        </>

    );
};

export default CardComponent;
