import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ContentCard from './ContentCard';
import { Box } from '@mui/material';

const Carousel = forwardRef((props, ref) => {
    const { items, customBtn } = props
    const sliceGroups = (data) => {
        var res = []
        data.forEach((element, idx) => {
            if (idx % 5 === 0) {
                res.push([[],[]])
                res[res.length - 1][0].push(element);
            } else {
                res[res.length - 1][1].push(element);
            }
        })
        return res
    }
    const itemsGroup = sliceGroups(items)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(itemsGroup.length)
    const [touchPosition, setTouchPosition] = useState(null)
    const currentEl = useRef(null)
    const [currentWidth, setCurrentWidth] = useState(0)
    const handleResize = () => {
        setCurrentWidth(currentEl.current.offsetWidth)
    }

    useImperativeHandle(ref, () => ({
        next() {
            if (currentIndex >= (length - 1)) return
            setCurrentIndex(prevState => prevState + 1)
        },
        prev() {
            if (currentIndex <= 0) return
            setCurrentIndex(prevState => prevState - 1)
        }
    }))

    useEffect(() => {
        setLength(itemsGroup.length)
        if (currentEl.current) {
            handleResize()
            currentEl.current.addEventListener('resize', handleResize)
        }
    }, [itemsGroup, currentEl])

    const next = () => {
        if (currentIndex >= (length - 1)) return
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
        <div className="carousel-layout">
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
                        ref={currentEl}
                        className={`carousel-content`}
                        style={{ transform: `translateX(-${currentIndex * currentWidth}px)` }}
                    >
                        {itemsGroup.map((group, gidx) => (
                            <Box key={gidx} sx={{
                                p: "10px",
                                display: 'grid',
                                columnGap: '30px',
                                rowGap: '24px',
                                gridTemplateColumns: 'repeat(2, 1fr)'
                            }}>
                                <ContentCard item={group[0][0]} maxWidth={'100%'} width={'100%'} imageHeight={322} titleFontSize={28} descVisible={true}></ContentCard>                           
                                <Box sx={{
                                    display: 'grid',
                                    columnGap: '30px',
                                    rowGap: '24px',
                                    gridTemplateColumns: 'repeat(2, 1fr)'
                                }}>
                                    {group[1].map((item, index) => (     
                                    <ContentCard key={index} item={item} maxWidth={'100%'} width={'100%'}></ContentCard>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </div>
                </div>
                {(currentIndex < (length - 1) && !customBtn) &&
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