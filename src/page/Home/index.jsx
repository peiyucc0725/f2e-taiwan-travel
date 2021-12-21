import banner from '../../assets/image/banner.png'
import logo from '../../assets/image/logo.png'
import '../../assets/sass/home.sass'
import SearchBar from '../../components/SeachBar'
import React from 'react';
import Carousel from '../../components/Carousel';

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
    return (
        <div className="home">
            <div className='home__header'>
                <img className="logo" src={logo} alt="logo" />
                <div className="title">和你一起探索台灣</div>
                <img className="banner" src={banner} alt="banner" />
                <SearchBar className="search-bar"></SearchBar>
            </div>
            <div className='home__body'>
                <Carousel items={slideInfo} show={4}></Carousel>
            </div>
        </div>
    )
}

export default Home