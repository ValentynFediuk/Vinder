import React from 'react';
import Button from "@mui/material/Button";
import {OutlinedBtnProps} from './OutlinedBtn.props'

const OutlinedBtn = ({children, onClick, sx}: OutlinedBtnProps): JSX.Element => {

    return (
        <Button
            fullWidth
            variant="outlined"
            type="submit"
            sx={{
                ...sx,
                paddingTop: '10px',
                paddingBottom: '10px',
            }}
        >
            {children}
        </Button>
    );
};

export default OutlinedBtn;
