import banner from '../../assets/image/banner.png'
import logo from '../../assets/image/logo.png'
import '../../assets/sass/home.sass'
import SearchBar from '../../components/SeachBar'
import React from 'react';
import Carousel from '../../components/Carousel';
import { useRef } from 'react';
import CustomBtn from '../../components/CustomBtn';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ContentCard from '../../components/ContentCard';

const activity = [
    { title: '2021金崙溫泉季聖誕點燈活動', range: '2021/02/10 ~ 2021/02/28', location: '宜蘭縣', tag: '年度活動', image: 1 },
    { title: '2021金崙溫泉季聖誕點燈活動', range: '2021/02/10 ~ 2021/02/28', location: '宜蘭縣', tag: '年度活動', image: 2 },
    { title: '2021金崙溫泉季聖誕點燈活動', range: '2021/02/10 ~ 2021/02/28', location: '宜蘭縣', tag: '年度活動', image: 3 },
    { title: '2021金崙溫泉季聖誕點燈活動', range: '2021/02/10 ~ 2021/02/28', location: '宜蘭縣', tag: '年度活動', image: 4 },
    { title: '2021金崙溫泉季聖誕點燈活動', range: '2021/02/10 ~ 2021/02/28', location: '宜蘭縣', tag: '年度活動', image: 5 },
    { title: '2021金崙溫泉季聖誕點燈活動', range: '2021/02/10 ~ 2021/02/28', location: '宜蘭縣', tag: '年度活動', image: 6 },
]
const hotAct = { 
    title: '九份老街', location: '新北市', tag: '歷史', image: 7, content: '九份老街是位於臺灣新北市瑞芳區的一條老街，主要範圍以聚集在基山街、豎崎路及輕便路等街道為主，是全台灣最熱門的觀光景點之一，全年觀光客絡繹不絕。若以客源分析，平日以來自日本、韓國等地的外籍遊客'
}

const Home = (props) => {
    const childRef = useRef();

    return (
        <div className="home">
            <div className='home__header'>
                <img className="logo" src={logo} alt="logo" />
                <div className="title">和你一起探索台灣</div>
                <img className="banner" src={banner} alt="banner" />
                <SearchBar className="search-bar"></SearchBar>
            </div>
            <div className='home__body'>
                <div className='arrowbtn-wrapper'>
                    <CustomBtn
                        variant="contained"
                        bgcolor="#33333333"
                        aria-label="search"
                        sx={{ p: '10px', width: 36, height: 36, mr: 3 }}
                        onClick={() => childRef.current.prev()}>
                        <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: 32 }} />
                    </CustomBtn>
                    <CustomBtn
                        variant="contained"
                        bgcolor="#33333333"
                        aria-label="search"
                        sx={{ p: '10px', width: 36, height: 36 }}
                        onClick={() => childRef.current.next()}>
                        <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 32 }} />
                    </CustomBtn>
                </div>
                <div className='custom-title'>近期活動</div>
                <Carousel ref={childRef} items={activity} show={4} customBtn={true}></Carousel>
                <div className='custom-title'>熱門景點</div>
                <ContentCard item={hotAct} width={255}></ContentCard>
            </div>
        </div>
    )
}

export default Home