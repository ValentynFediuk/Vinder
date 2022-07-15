import React, {createContext, useContext, useMemo, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import {useTheme, ThemeProvider, createTheme} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {TextField} from "@mui/material";
import Button from '@mui/material/Button';
import Sheet from '@mui/joy/Sheet';
import {CssVarsProvider} from '@mui/joy';

const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});

function MainLayout() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            {theme.palette.mode} mode
            <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
            </IconButton>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                    maxWidth: '1000px'
                }}
                noValidate
                autoComplete="off"
            >
                <CssVarsProvider>
                    <Sheet>You are welcome</Sheet>
                </CssVarsProvider>
                <TextField
                    sx={{
                        width: '100%'
                    }}
                    id="outlined-basic"
                    label="First name"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Last name"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Confirm password"
                    variant="outlined"
                />
                <Button
                    variant="outlined"
                    type="submit"
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}

export default function ToggleColorMode() {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <MainLayout/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}