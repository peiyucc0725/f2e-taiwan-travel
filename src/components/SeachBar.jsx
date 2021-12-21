import * as React from 'react';
import { Paper, InputBase, InputLabel, MenuItem, Select, FormControl, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomBtn from './CustomBtn';
import { styled } from '@mui/material/styles';
import '../assets/sass/global.sass'

const SaerchBar = (props) => {
    const [place, setPlace] = React.useState(1);
    const [type, setType] = React.useState(1);

    const handleChangePlace = (event) => {
        setPlace(event.target.value);
    };

    const handleChangeType = (event) => {
        setType(event.target.value);
    };
    
    const SearchBarPaper = styled(Paper)(() => ({
        borderLeft: '1px solid rgba(51, 51, 51, 0.2)',
        borderTop: '1px solid rgba(51, 51, 51, 0.2)',
        borderBottom: '1px solid rgba(51, 51, 51, 0.2)',
        boxSizing: 'border-box',
        boxShadow: 'none'
    }))

    const SearchBarInput = styled(InputBase)(() => ({
        fontSize: '18px'
    }))

    const NoBorderSelect = styled(Select)(() => ({
        fontSize: '18px',
        '.MuiSelect-select': {
            padding: '15px 12px 0px 12px',
            paddingRight: '10px !important'
        },
        'fieldset': {
            border: 'none'
        },
        'svg': {
            visibility: 'hidden'
        }
    }))

    return (
        <SearchBarPaper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: 730, height: 60 }}
            {...props}
        >
            <FormControl sx={{ mt: 1, width: 100, height: 48 }}>
                <InputLabel id="demo-simple-select-standard-label" sx={{ mt: 0.5 }}>地點</InputLabel>
                <NoBorderSelect
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={place}
                    label="地點"
                    onChange={handleChangePlace}
                    sx={{ height: 48 }}
                >
                    <MenuItem value={1}>全台灣</MenuItem>
                    <MenuItem value={2}>台北</MenuItem>
                    <MenuItem value={3}>高雄</MenuItem>
                </NoBorderSelect>
            </FormControl>
            <Divider sx={{ height: 45 }} orientation="vertical" />
            <FormControl sx={{ mt: 1, width: 100, height: 48 }}>
                <InputLabel id="demo-simple-select-standard-label" sx={{ mt: 0.5 }}>分類</InputLabel>
                <NoBorderSelect
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={type}
                    label="分類"
                    onChange={handleChangeType}
                    sx={{ height: 48 }}
                >
                    <MenuItem value={1}>景點</MenuItem>
                    <MenuItem value={2}>美食</MenuItem>
                </NoBorderSelect>
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
                sx={{ p: '10px', width: 120, height: 60 }}>
                <SearchIcon sx={{ mr: 1 }} />
                搜尋
            </CustomBtn>
        </SearchBarPaper>
    )
}

export default SaerchBar