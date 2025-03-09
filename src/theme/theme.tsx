import { createTheme } from "@mui/material";

export const themePrincipal = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2196f3'
        },
        secondary: {
            main: '#64b5f6'
        },
        text: {
            primary: '#000000',
            secondary: '#757575'
        },
        background: {
            default: '#e3f2fd',
            paper: '#ffffff'
        },
        error: {
            main: '#f44336',
          },
        warning: {
            main: '#ffa726',
        },
        info: {
            main: '#29b6f6',
        },
        success: {
            main: '#66bb6a',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h6:{
            fontSize: '1.25rem',
            fontWeight: 600,
            marginBottom: 8,
        },
        body2: {
            fontSize: '0.875rem'
        }
    }
})

export const themeRoxo = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#9c27b0'
        },
        secondary: {
            main: '#9f0fff'
        },
        text: {
            primary: '#000000',
            secondary: '#757575'
        },
        background: {
            default: '#e3f2fd',
            paper: '#ffffff'
        },
        error: {
            main: '#f44336',
          },
        warning: {
            main: '#ffa726',
        },
        info: {
            main: '#29b6f6',
        },
        success: {
            main: '#66bb6a',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h6:{
            fontSize: '1.25rem',
            fontWeight: 600,
        },
        body2: {
            fontSize: '0.875rem'
        }
    }
})

export const themeRose = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#e91e63'
        },
        secondary: {
            main: '#e90f78'
        },
        text: {
            primary: '#000000',
            secondary: '#757575'
        },
        background: {
            default: '#e3f2fd',
            paper: '#ffffff'
        },
        error: {
            main: '#f44336',
          },
        warning: {
            main: '#ffa726',
        },
        info: {
            main: '#29b6f6',
        },
        success: {
            main: '#66bb6a',
        }
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h6:{
            fontSize: '1.25rem',
            fontWeight: 600,
        },
        body2: {
            fontSize: '0.875rem'
        }
    }
})

export const themeVerde = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#4caf50'
        },
        secondary: {
            main: '#4cff50'
        },
        text: {
            primary: '#000000',
            secondary: '#757575'
        },
        background: {
            default: '#e3f2fd',
            paper: '#ffffff'
        },
        error: {
            main: '#f44336',
          },
        warning: {
            main: '#ffa726',
        },
        info: {
            main: '#29b6f6',
        },
        success: {
            main: '#66bb6a',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h6:{
            fontSize: '1.25rem',
            fontWeight: 600,
        },
        body2: {
            fontSize: '0.875rem'
        }
    }
})

export const themes = {
    principal: themePrincipal,
    roxo: themeRoxo,
    rose: themeRose,
    verde: themeVerde
};