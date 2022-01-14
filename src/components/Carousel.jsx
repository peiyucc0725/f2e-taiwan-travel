import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import '../assets/sass/global.sass'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ContentCard from './ContentCard';

const Carousel = forwardRef((props, ref) => {
    const { show, items, customBtn } = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(items.length)
    const [touchPosition, setTouchPosition] = useState(null)
    
    useImperativeHandle(ref, () => ({
        next() {
            if (currentIndex >= (length - show)) return
            setCurrentIndex(prevState => prevState + 1)
        },
        prev() {
            if (currentIndex <= 0) return
            setCurrentIndex(prevState => prevState - 1)
        }
    }))

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
                {(currentIndex > 0 && !customBtn) &&
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
                {(currentIndex < (length - show) && !customBtn)&&
                    <ArrowForwardIosIcon onClick={next} />
                }
            </div>
        </div>
    )
})

Carousel.defaultProps = {
    customBtn: false
}

export default Carousel