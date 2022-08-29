import React, { useRef, useEffect } from 'react';
import '../../assets/sass/detail.sass'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Divider } from '@mui/material';
// import { fetch } from '../../apis/actives';
import { activityDetail } from '../../utils/variable.js'

const Detail = (props) => {
    const [info, setInfo] = React.useState({});
    const [textOverflow, settTextOverflow] = React.useState(false);

    const detailContent = useRef()
    const detailContentText = useRef()
    const checkContentHeight = () => {
        const height = detailContent.current.offsetHeight
        const textHeight = detailContentText.current.offsetHeight
        settTextOverflow(textHeight > height)
    }
    const fetchInfo = async (id) => {
        // let {data} = await fetch(id)
        activityDetail.precautions = activityDetail.precautions.replace(/(\\r\\n)|(\\n)/g,'\u000A')
        setInfo(activityDetail)
    }

    useEffect(() => {
        checkContentHeight()
        fetchInfo(1)
    }, [])

    return (
        <div className='detail-page'>
            <div className='detail-contenter'>
                <div className='detail-header'>
                    <img className="detail-image" src={info.image} alt="detailImage" />
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
                        <div className='detail-info__contant'>
                            <div className='detail-info__contant-inline'>
                                <div className='title'>開放時間</div>
                                <div>{info.time || '-'}</div>
                            </div>
                            <div className='detail-info__contant-inline'>
                                <div className='title'>票價資訊</div>
                                <div>{info.ticket || '-'}</div>
                            </div>
                            <div className='detail-info__contant-inline'>
                                <div className='title'>聯絡電話</div>
                                <div>{info.phone || '-'}</div>
                            </div>
                            <div className='detail-info__contant-inline'>
                                <div className='title'>景點地址</div>
                                <div>{info.address || '-'}</div>
                            </div>
                            <div className='detail-info__contant-inline'>
                                <div className='title'>官方網站</div>
                                <a href={info.url} target="_blank" rel="noopener noreferrer">點擊開啟網站</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className='detail-body'>
                    <div className='detail-body__left'>
                        <div className='detail-body__block'>
                            <div className='custom-title'>景點介紹</div>
                            <div className='detail-body__content' >
                                <div className='text' ref={detailContent}>
                                    <span ref={detailContentText}>{info.content}</span>
                                    {textOverflow &&
                                        <div className='detail-mask'></div>
                                    }
                                </div>
                                {textOverflow &&
                                    <div className='detail-more'>
                                        完整介紹
                                        <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 22 }} />
                                    </div>
                                }
                            </div>
                        </div>
                        <Divider />
                        <div className='detail-body__block'>
                            <div className='custom-title'>地圖</div>
                            <div className='detail-body__content' >
                                <iframe
                                    title={info.title}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.8735350227576!2d120.11122701495627!3d23.138297384894603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346dd657f8e559a7%3A0xa9e8addb885e5db8!2z5LiD6IKh6b6N5bGx5a6u!5e0!3m2!1szh-TW!2stw!4v1659065245131!5m2!1szh-TW!2stw"
                                    width="540"
                                    height="304"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                <div className="traffic-info">
                                    <div className='title'>交通資訊</div>
                                    {info.traffic}
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className='detail-body__block'>
                            <div className='custom-title'>注意事項</div>
                            <div className='detail-body__content' >
                                {info.precautions}
                            </div>
                        </div>
                    </div>
                    <div className='detail-body__right'>
                        <div className='detail-body__block'>
                            <div className='custom-title'>附近景點</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail