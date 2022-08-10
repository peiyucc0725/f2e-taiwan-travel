import React, { useRef, useEffect } from 'react';
import '../../assets/sass/detail.sass'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Divider } from '@mui/material';

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
        url: 'https://zh-tw.facebook.com/pages/category/Religious-organization/%E4%B8%83%E8%82%A1%E9%BE%8D%E5%B1%B1%E5%AE%AE-1797815690509162/',
        content: '華麗龍山宮，在地信仰中心龍山宮為七股潟湖區龍山里的地標建築，高聳華麗的廟宇被本地人稱為「王宮」，裡面供奉著池府王爺等神明，是全村里的信仰中心，龍山里之名即由此而來。龍山宮前有一處龍山漁港，當地漁獲的買賣都在此，每天早上6:30開始漁獲拍賣，不僅可以買到新鮮的現貨，熱鬧又別開生面的市場交易，值得前往參觀，也可由此搭乘竹筏前往鄰近沙洲、欣賞蚵棚美景嘗鮮。'
    }
    const [textOverflow, settTextOverflow] = React.useState(false);

    const detailContent = useRef()
    const detailContentText = useRef()
    const checkContentHeight = () => {
        const height = detailContent.current.offsetHeight
        const textHeight = detailContentText.current.offsetHeight
        settTextOverflow(textHeight > height)
    }

    useEffect(() => {
        checkContentHeight()
    }, [])

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
                                    title="七股龍山宮"
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
                                    1. 從「新營火車站」步行至《新營轉運站》，搭乘【黃幹線】至《白河》站，轉乘【黃13】或【黃14】於《白河水庫》下車。
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className='detail-body__block'>
                            <div className='custom-title'>注意事項</div>
                            <div className='detail-body__content' >
                                1.注意蚊蟲叮咬，鳥族多，記得帶望眼鏡來賞鳥<br />
                                2.水域地區禁止游泳<br />
                                3.機車禁止進入
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