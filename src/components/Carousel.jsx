import React, { useState, useEffect } from 'react';
import '../assets/sass/global.sass'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ContentCard from './ContentCard';

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.items; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

const Carousel = (props) => {
    const { show, items } = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(items.length)
    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(() => {
        setLength(items.length)
    }, [items])

    const next = () => {
        if (currentIndex >= (length - show)) return
        setCurrentIndex(prevState => prevState + 1)
    }

    const prev = () => {
        if (currentIndex <= 0) return
        setCurrentIndex(prevState => prevState - 1)
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
        if (touchDown === null) return
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) next()
        if (diff < -5) prev()

        setTouchPosition(null)
    }

    return (
        <div className="carousel">
            <div className="carousel-wrapper">
                {currentIndex > 0 &&
                    <ArrowBackIosNewIcon onClick={prev} />
                }
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * 255 + currentIndex * 20}px)` }}
                    >
                        {items.map((item, index) => (
                            <ContentCard index={index} key={index}></ContentCard>
                        ))}
                    </div>
                </div>
                {currentIndex < (length - show) &&
                    <ArrowForwardIosIcon onClick={next} />
                }
            </div>
        </div>
    )
}

export default Carousel