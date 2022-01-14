import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const ContentCard = (props) => {
    return (
        <Card sx={{ maxWidth: 255 }} className="custom-card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://picsum.photos/id/${(props.index + 1)*10}/800/300`}
                    alt="green iguana"
                />
                <CardContent className='custom-card__content'>
                    <div className='custom-card__range'>
                        <DateRangeOutlinedIcon sx={{ fontSize: 16 }}/>
                        2021/02/10 ~ 2021/02/28
                    </div>
                    <div className='custom-card__title'>2021金崙溫泉季聖誕點燈儀式</div>
                    <div className='custom-card__location'>
                        <LocationOnOutlinedIcon sx={{ fontSize: 20 }}/>
                        宜蘭縣
                    </div>
                    <div className='custom-card__tag'>年度活動</div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ContentCard