import { Container } from "@mui/material";
import CardComponent from "../../components/Card";

export default function Dashboard() {
    return (
        <Container
            sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                backgroundColor: 'lightgray',
                padding: '16px',
            }}
        >
            <CardComponent
                subject="Equiment"
                description="Manage equipment"
                linkAddress="/equipment"
                imgSource="office-material.png"
            />
            <CardComponent
                subject="Equiment"
                description="Manage equipment"
                linkAddress="/equipment"
                imgSource="tools.png"
            />
            <CardComponent
                subject="Equiment"
                description="Manage equipment"
                linkAddress="/equipment"
                imgSource="tools.png"
            />
            <CardComponent
                subject="Equiment"
                description="Manage equipment"
                linkAddress="/equipment"
                imgSource="tools.png"
            />
            <CardComponent
                subject="Equiment"
                description="Manage equipment"
                linkAddress="/equipment"
                imgSource="tools.png"
            />
            <CardComponent
                subject="Equiment"
                description="Manage equipment"
                linkAddress="/equipment"
                imgSource="tools.png"
            />
         
        </Container>
    )
}