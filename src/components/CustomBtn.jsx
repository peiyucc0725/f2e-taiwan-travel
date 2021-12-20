import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomBtn = (props) => {
    const ColorButton = styled(Button)(() => ({
        color: '#ffffff',
        backgroundColor: '#23BFD4',
        fontSize: '16px',
        '&:hover': {
          backgroundColor: '#17b2c7',
        },
      }));

    return (
        <ColorButton variant="contained" {...props}>{props.children}</ColorButton>
    )
}

export default CustomBtn