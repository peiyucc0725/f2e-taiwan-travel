import banner from '../../assets/image/banner.png'
import logo from '../../assets/image/logo_w.png'
import '../../assets/sass/home.sass'
import SearchBar from '../../components/SeachBar'
import React from 'react';
import Carousel from '../../components/Carousel';
import { useRef } from 'react';
import CustomBtn from '../../components/CustomBtn';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import CarouselLayout from '../../components/CarouselLayout';
import { activity, hotAttSub, hotActSub, hotFood, hotStay } from '../../utils/variable.js'
import Footer from '../../components/Footer'

const Home = (props) => {
    const childRefAct = useRef();
    const childRefHotAtt = useRef();
    const childRefHotAct = useRef();
    const childRefHotFood = useRef();
    const childRefHotStay = useRef();

    return (
        <div className="home">
            <div className='home__header'>
                <img className="logo" src={logo} alt="logo" />
                <div className="title">和你一起探索台灣</div>
                <img className="banner" src={banner} alt="banner" />
                <SearchBar className="search-bar"></SearchBar>
            </div>
            <div className='home__body'>
                <div className="body-block">
                    <div className='arrowbtn-wrapper'>
                        <CustomBtn
                            variant="contained"
                            bgcolor="#33333333"
                            aria-label="prev"
                            sx={{ p: '10px', width: 36, height: 36, mr: 3 }}
                            onClick={() => childRefAct.current.prev()}>
                            <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: 32 }} />
                        </CustomBtn>
                        <CustomBtn
                            variant="contained"
                            bgcolor="#33333333"
                            aria-label="next"
                            sx={{ p: '10px', width: 36, height: 36 }}
                            onClick={() => childRefAct.current.next()}>
                            <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 32 }} />
                        </CustomBtn>
                    </div>
                    <div className='custom-title'>近期活動</div>
                    <Carousel ref={childRefAct} items={activity} show={4} customBtn={true}></Carousel>
                </div>
                <div className="body-block">
                    <div className='arrowbtn-wrapper'>
                        <CustomBtn
                            variant="contained"
                            bgcolor="#33333333"
                            aria-label="prev"
                            sx={{ p: '10px', width: 36, height: 36, mr: 3 }}
                            onClick={() => childRefHotAtt.current.prev()}>
                            <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: 32 }} />
                        </CustomBtn>
                        <CustomBtn
                            variant="contained"
                            bgcolor="#33333333"
                            aria-label="next"
                            sx={{ p: '10px', width: 36, height: 36 }}
                            onClick={() => childRefHotAtt.current.next()}>
                            <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 32 }} />
                        </CustomBtn>
                    </div>
                    <div className='custom-title'>熱門景點</div>
                    <CarouselLayout ref={childRefHotAtt} items={hotAttSub} customBtn={true}></CarouselLayout>
                </div>
                <div className="body-block">
                    <div className='arrowbtn-wrapper'>
                        <CustomBtn
                            variant="contained"
                            bgcolor="#33333333"
                            aria-label="prev"
                            sx={{ p: '10px', width: 36, height: 36, mr: 3 }}
                            onClick={() => childRefHotAct.current.prev()}>
                            <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: 32 }} />
                        </CustomBtn>
                        <CustomBtn
                            variant="contained"
                            bgcolor="#33333333"
                            aria-label="next"
                            sx={{ p: '10px', width: 36, height: 36 }}
                            onClick={() => childRefHotAct.current.next()}>
                            <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 32 }} />
                        </CustomBtn>
                    </div>
                    <div className='custom-title'>熱門活動</div>
                    <CarouselLayout ref={childRefHotAct} items={hotActSub} customBtn={true}></CarouselLayout>
                </div>
                <div className="body-block">
                    <div className='arrowbtn-wrapper'>
                        <CustomBtn
                            variant="contained"
                            bgcolor="#33333333"
                            aria-label="prev"
                            sx={{ p: '10px', width: 36, height: 36, mr: 3 }}
                            onClick={() => childRefHotFood.current.prev()}>
                            <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: 32 }} />
                        </CustomBtn>
                        <CustomBtn
                            variant="contained"
                            bgcolor="#33333333"
                            aria-label="next"
                            sx={{ p: '10px', width: 36, height: 36 }}
                            onClick={() => childRefHotFood.current.next()}>
                            <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 32 }} />
                        </CustomBtn>
                    </div>
                    <div className='custom-title'>熱門美食</div>
                    <Carousel ref={childRefHotFood} items={hotFood} show={4} customBtn={true}></Carousel>
                </div>
                <div className="body-block">
                    <div className='arrowbtn-wrapper'>
                        <CustomBtn
                            variant="contained"
                            bgcolor="#33333333"
                            aria-label="prev"
                            sx={{ p: '10px', width: 36, height: 36, mr: 3 }}
                            onClick={() => childRefHotStay.current.prev()}>
                            <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: 32 }} />
                        </CustomBtn>
                        <CustomBtn
                            variant="contained"
                            bgcolor="#33333333"
                            aria-label="next"
                            sx={{ p: '10px', width: 36, height: 36 }}
                            onClick={() => childRefHotStay.current.next()}>
                            <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 32 }} />
                        </CustomBtn>
                    </div>
                    <div className='custom-title'>熱門住宿</div>
                    <Carousel ref={childRefHotStay} items={hotStay} show={4} customBtn={true}></Carousel>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home