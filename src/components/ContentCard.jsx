import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';

const ContentCard = (props) => {
    return (
        <Card sx={{ maxWidth: 255 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://picsum.photos/id/${props.index + 1}/800/300`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard{props.index + 1}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ContentCard