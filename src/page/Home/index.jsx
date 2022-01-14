import banner from '../../assets/image/banner.png'
import logo from '../../assets/image/logo.png'
import '../../assets/sass/home.sass'
import SearchBar from '../../components/SeachBar'
import React from 'react';
import Carousel from '../../components/Carousel';
import  { useRef } from 'react';
import CustomBtn from '../../components/CustomBtn';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const slideInfo = [
    { backgroundColor: '#ff7c7c', title: 'Slide 1' },
    { backgroundColor: '#ffb6b9', title: 'Slide 2' },
    { backgroundColor: '#8deaff', title: 'Slide 3' },
    { backgroundColor: '#ffe084', title: 'Slide 4' },
    { backgroundColor: '#d9d9d9', title: 'Slide 5' },
    { backgroundColor: '#d9d9d9', title: 'Slide 6' },
    { backgroundColor: '#d9d9d9', title: 'Slide 7' },
]

const Home = (props) => {
    const childRef = useRef();

    return (
        <div className="home">
            {/* <div className='home__header'>
                <img className="logo" src={logo} alt="logo" />
                <div className="title">和你一起探索台灣</div>
                <img className="banner" src={banner} alt="banner" />
                <SearchBar className="search-bar"></SearchBar>
            </div> */}
            <div className='home__body'>
                <CustomBtn
                    variant="contained"
                    bgcolor="#33333333"
                    aria-label="search"
                    sx={{ p: '10px', width: 36, height: 36 }}
                    onClick={() => childRef.current.prev()}>
                    <KeyboardArrowLeftOutlinedIcon sx={{ mr: 1 }} />
                </CustomBtn>
                <CustomBtn
                    variant="contained"
                    bgcolor="#33333333"
                    aria-label="search"
                    sx={{ p: '10px', width: 36, height: 36 }}
                    onClick={() => childRef.current.next()}>
                    <KeyboardArrowRightOutlinedIcon sx={{ mr: 1 }} />
                </CustomBtn>
                <div className='custom-title'>近期活動</div>
                <Carousel ref={childRef} items={slideInfo} show={4} customBtn={true}></Carousel>
            </div>
        </div>
    )
}

export default Home