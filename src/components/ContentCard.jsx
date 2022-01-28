import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const ContentCard = (props) => {
    const { maxWidth, minWidth, width, imageHeight, titleFontSize } = props
    const cardInfo = props.item
    return (
        <Card sx={{ maxWidth, minWidth, width: width || 'inital' }} className="custom-card">
            <CardActionArea>
                {(cardInfo && cardInfo.image) &&
                    <CardMedia
                        component="img"
                        height={imageHeight}
                        image={`https://picsum.photos/id/${(cardInfo.image + 1) * 10}/800/300`}
                        alt="green iguana"
                    />
                }
                <CardContent className='custom-card__content'>
                    {(cardInfo && cardInfo.range) &&
                        <div className='custom-card__range'>
                            <DateRangeOutlinedIcon sx={{ fontSize: 16 }}/>
                            {cardInfo.range}
                        </div>
                    }
                    {(cardInfo && cardInfo.title) &&
                        <div className='custom-card__title' style={{ fontSize: titleFontSize }}>{cardInfo.title}</div>
                    }
                    {(cardInfo && cardInfo.location) &&
                        <div className='custom-card__location'>
                            <LocationOnOutlinedIcon sx={{ fontSize: 20 }}/>
                            {cardInfo.location}
                        </div>
                    }
                    {(cardInfo && cardInfo.content) &&
                        <div className='custom-card__desc'>{cardInfo.content}</div>
                    }
                    {(cardInfo && cardInfo.tags) &&
                        cardInfo.tags.map((item, index) => (
                            <div key={index} className='custom-card__tag'>{item}</div>
                        ))
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

ContentCard.defaultProps = {
    maxWidth: 255,
    minWidth: 200,
    imageHeight: 140,
    titleFontSize: 20
}

export default ContentCard