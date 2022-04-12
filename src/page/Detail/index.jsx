import * as React from 'react';
import '../../assets/sass/detail.sass'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Detail = (props) => {
    const info = {
        title: '七股龍山宮',
        location: '台南市',
        tags: ['遊憩', '歷史古蹟', '人文'],
        image: 7,
        time: '參觀或開放時間為 05:00-20:00',
        ticket: '免費',
        phone: '06 787 1058',
        address: '台南市七股區龍山208號',
        url: '',
        content: '九份老街是位於臺灣新北市瑞芳區的一條老街，主要範圍以聚集在基山街、豎崎路及輕便路等街道為主，是全台灣最熱門的觀光景點之一，全年觀光客絡繹不絕。若以客源分析，平日以來自日本、韓國等地的外籍遊客'
    }

    return (
        <div className='detail-page'>
            <div className='detail-contenter'>
                <div className='detail-header'>
                    <img className="detail-image" src={`https://picsum.photos/id/${info.image}/600/300`} alt="detailImage" />
                    <div className="detail-info">
                        <div className='detail-info__title'>{info.title}</div>
                        <div className='detail-inline'>
                            <div className='detail-info__location'>
                                <LocationOnOutlinedIcon sx={{ fontSize: 20 }} />
                                {info.location}
                            </div>
                            <div className='detail-info__tag-wrap'>
                                {(info && info.tags) &&
                                    info.tags.map((item, index) => (
                                        <div key={index} className='detail-info__tag'>{item}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail