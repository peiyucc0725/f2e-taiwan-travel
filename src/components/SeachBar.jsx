import React, {useCallback} from 'react';
import { InputBase, InputLabel, MenuItem, FormControl, Divider, Button, Menu, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomBtn from './CustomBtn';
import { styled } from '@mui/material/styles';
import { city } from '../utils/variable'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import {useNavigate} from 'react-router-dom';

const cateArray = [
    {
        text: '景點',
        value: 1,
        icon: (<LocationOnOutlinedIcon sx={{ fontSize: 20, mr: '12px' }} />)
    },
    {
        text: '旅宿',
        value: 2,
        icon: (<HouseOutlinedIcon sx={{ fontSize: 20, mr: '12px' }} />)
    },
    {
        text: '活動',
        value: 3,
        icon: (<LocalActivityOutlinedIcon sx={{ fontSize: 20, mr: '12px' }} />)
    },
    {
        text: '美食',
        value: 4,
        icon: (<RestaurantOutlinedIcon sx={{ fontSize: 20, mr: '12px' }} />)
    }
]
const MenuBtn = (props) => {
    return (
        <Button
            className='menu-btn'
            aria-controls={props.controls}
            aria-haspopup="true"
            sx={{ height: 48, color: '#333333'}}
            disableRipple={true}
            onClick={props.handleClick}
        >
            {props.data}
        </Button>
    )
}

const SaerchBar = (props) => {
    const [place, setPlace] = React.useState('');
    const [cate, setCate] = React.useState('');
    const [anchorPlaceEl, setAnchorPlaceEl] = React.useState(null);
    const openPlace = Boolean(anchorPlaceEl);
    const [anchorCateEl, setAnchorCateEl] = React.useState(null);
    const openCate = Boolean(anchorCateEl);
    const navigate = useNavigate();
    const search = useCallback(() => navigate('/search', {replace: true}), [navigate]);

    const transPlace = (data) => {
        const cityMapping = city.map(item => { return [...item.data] }).reduce((acc, val) => acc.concat(val))
        return cityMapping.find(city => city.value === data);
    }

    const handleChangePlace = (data) => {
        if (data === 0) {
            setPlace('全部');
        }
        else {
            const findPlace = transPlace(data)
            if (!findPlace) return
            setPlace(findPlace.text);
        }
        setAnchorPlaceEl(null);
    };

    const handleChangeCate = (data) => {
        const findCate = cateArray.find(cate => cate.value === data);
        if (!findCate) return
        setCate(findCate.text);
        setAnchorCateEl(null);
    };


    const SearchBarInput = styled(InputBase)(() => ({
        fontSize: '18px'
    }))

    return (
        <div
            className='search-bar'
            style={{ height: props.dense ? 55 : 60 }}
        >
            <FormControl sx={{ width: 100, height: 48, mt: '16px' }}>
                <InputLabel shrink focused={openPlace}>地點</InputLabel>
                <MenuBtn
                    controls={'city-menu'}
                    data={place}
                    handleClick={(event) => setAnchorPlaceEl(event.currentTarget)}
                ></MenuBtn>
                <Menu
                    id="city-menu"
                    anchorEl={anchorPlaceEl}
                    open={openPlace}
                    onClose={() => setAnchorPlaceEl(null)}
                    keepMounted
                >
                    <MenuItem className='all-city-btn' onClick={() => handleChangePlace(0)}>所有地點</MenuItem>
                    <Box sx={{ display: 'flex' }}>
                        {city.map((zone, zoneIdx) => (
                            <div key={zoneIdx}>
                                <div className='zone-type'>{zone.type}</div>
                                {zone.data.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => handleChangePlace(item.value)}
                                    >{item.text}</MenuItem>
                                ))}
                            </div>
                        ))}
                    </Box>
                </Menu>
            </FormControl>
            <Divider sx={{ height: 45 }} orientation="vertical" />
            <FormControl sx={{ width: 100, height: 48, mt: '16px' }}>
                <InputLabel shrink focused={openCate}>分類</InputLabel>
                <MenuBtn
                    controls={'cate-menu'}
                    data={cate}
                    handleClick={(event) => setAnchorCateEl(event.currentTarget)}
                ></MenuBtn>
                <Menu
                    id="cate-menu"
                    anchorEl={anchorCateEl}
                    open={openCate}
                    onClose={() => setAnchorCateEl(null)}
                    keepMounted
                >
                    <div className='cate-block'>
                        {cateArray.map(cate => (
                            <MenuItem key={cate.value} onClick={() => handleChangeCate(cate.value)}>
                                {cate.icon}
                                {cate.text}
                            </MenuItem>
                        ))}
                    </div>
                </Menu>
            </FormControl>
            <Divider sx={{ height: 45 }} orientation="vertical" />
            <SearchBarInput
                sx={{ ml: 2, flex: 1 }}
                placeholder="試試輸入關鍵字"
                inputProps={{ 'aria-label': '試試輸入關鍵字' }}
            />

            <CustomBtn
                variant="contained"
                aria-label="search"
                className="search-btn"
                sx={{ p: '10px', width: 120, height: props.dense ? 55 : 60 }}
                onClick={search}>
                <SearchIcon sx={{ mr: 1 }} />
                搜尋
            </CustomBtn>
        </div>
    )
}


export default SaerchBar