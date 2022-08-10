import * as React from 'react';
import '../../assets/sass/search.sass'
import searchBanner from '../../assets/image/searchBanner.png'
import { styled, Tabs, Tab, Divider } from '@mui/material';
import ContentCard from '../../components/ContentCard';
import Tags from '../../components/Tags'
import { fetchList } from '../../apis/actives';

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
    const [actives, setActives] = React.useState([]);
    const handleChange = (event, newValue) => {
        setCate(newValue);
    };
    const tags = [
        [
            { text: '熱門', value: 0 }
        ],
        [
            { text: '遊憩', value: 1 },
            { text: '自然風景', value: 2 },
            { text: '歷史古蹟', value: 3 },
            { text: '更多篩選', value: 4 }
        ]
    ]

    const fetchActives = async () => {
        const {data} = await fetchList()
        setActives(data)
    }

    React.useEffect(() => {
        fetchActives()
    }, [])

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
                <div className='search-result'>
                    <div>
                        台南景點的 
                        <span className="primary-text" style={{'margin': '0 6px'}}>
                            {'博物館'}
                        </span> 
                        共有 
                        <span className="primary-text" style={{'margin': '0 6px'}}>
                            {22}
                        </span> 
                        筆資料
                    </div>
                    <Tags items={tags}></Tags>
                </div>
                <Divider sx={{ my: '10px' }} />
                <div className='search-content'>
                    {actives.map((group, gidx) => (
                        <ContentCard
                            key={gidx}
                            item={group}
                            maxWidth={'100%'}
                            width={'100%'}
                            imageHeight={152}
                            titleFontSize={20}
                            descVisible={true}
                        ></ContentCard>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search