import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomBtn = (props) => {
    const ColorButton = styled(Button)(() => ({
        color: props.textcolor,
        backgroundColor: props.bgcolor,
        fontSize: props.fontSize,
        '&:hover': {
          backgroundColor: props.bgcolor,
        },
        boxShadow: 'none',
        minWidth: '36px'
      }));

    return (
        <ColorButton variant="contained" {...props}>{props.children}</ColorButton>
    )
}

CustomBtn.defaultProps = {
  textcolor: '#ffffff',
  bgcolor: '#23BFD4',
  fontSize: '16px'
}

export default CustomBtn