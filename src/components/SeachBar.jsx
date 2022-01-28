import React from 'react';
import { InputBase, InputLabel, MenuItem, FormControl, Divider, Button, Menu, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomBtn from './CustomBtn';
import { styled } from '@mui/material/styles';
import { city } from '../utils/variable'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';

const MenuBtn = (props) => {
    return (
        <Button
            id="fade-button"
            aria-controls={props.controls}
            aria-haspopup="true"
            onClick={props.handleClick}
            sx={{ height: 48 }}
        >
            {props.data}
        </Button>
    )
}

const SaerchBar = (props) => {
    const [place, setPlace] = React.useState(0);
    const [cate, setCate] = React.useState(0);
    const [anchorPlaceEl, setAnchorPlaceEl] = React.useState(null);
    const openPlace = Boolean(anchorPlaceEl);
    const [anchorCateEl, setAnchorCateEl] = React.useState(null);
    const openCate = Boolean(anchorCateEl);

    const handleChangePlace = (data) => {
        setPlace(data);
        setAnchorPlaceEl(null);
    };

    const handleChangeCate = (data) => {
        setCate(data);
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
            <FormControl sx={{ mt: 1, width: 100, height: 48 }}>
                <InputLabel id="demo-simple-select-standard-label" sx={{ mt: 0.5 }}>地點</InputLabel>
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
                    <MenuItem onClick={() => handleChangePlace(0)}>全選</MenuItem>
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
            <FormControl sx={{ mt: 1, width: 100, height: 48 }}>
                <InputLabel id="demo-simple-select-standard-label" sx={{ mt: 0.5 }}>分類</InputLabel>
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
                        <MenuItem onClick={() => handleChangeCate(1)}>
                            <LocationOnOutlinedIcon sx={{ fontSize: 20, mr: '12px' }}/>
                            景點
                        </MenuItem>
                        <MenuItem onClick={() => handleChangeCate(2)}>
                            <HouseOutlinedIcon sx={{ fontSize: 20, mr: '12px' }}/>
                            旅宿
                        </MenuItem>
                        <MenuItem onClick={() => handleChangeCate(3)}>
                            <LocalActivityOutlinedIcon sx={{ fontSize: 20, mr: '12px' }}/>
                            活動
                        </MenuItem>
                        <MenuItem onClick={() => handleChangeCate(4)}>
                            <RestaurantOutlinedIcon sx={{ fontSize: 20, mr: '12px' }}/>
                            美食
                        </MenuItem>
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
                sx={{ p: '10px', width: 120, height: props.dense ? 55 : 60 }}>
                <SearchIcon sx={{ mr: 1 }} />
                搜尋
            </CustomBtn>
        </div>
    )
}


export default SaerchBar