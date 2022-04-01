import * as React from 'react';
import '../../assets/sass/search.sass'
import searchBanner from '../../assets/image/searchBanner.png'
import { styled, Tabs, Tab } from '@mui/material';
import ContentCard from './ContentCard';

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        bottom: '5px',
        height: '3px'
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#333333',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
        fontSize: '20px',
        color: '#33333366',
        fontWeight: 400,
        '&.Mui-selected': {
            color: '#333333',
            fontWeight: 600,
        },
        '&.Mui-focusVisible': {
            backgroundColor: '#333333',
        },
    }),
);

const Search = (props) => {
    const [cate, setCate] = React.useState(0);
    const handleChange = (event, newValue) => {
        setCate(newValue);
    };

    return (
        <div className='search-page'>
            <div className='search-contenter'>
                <img className="search-banner" src={searchBanner} alt="banner" />
                <StyledTabs value={cate} onChange={handleChange} aria-label="nav tabs example" centered>
                    <StyledTab label="景點" />
                    <StyledTab label="住宿" />
                    <StyledTab label="美食" />
                    <StyledTab label="活動" />
                </StyledTabs>
                <div className='search-content'>
                    <ContentCard></ContentCard>
                </div>
            </div>
        </div>
    )
}

export default Search