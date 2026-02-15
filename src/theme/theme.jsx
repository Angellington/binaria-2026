import { createTheme, responsiveFontSizes } from '@mui/material/styles';


const breakpoints = {
  values: {
    xs: 0,      
    sm: 600,    
    md: 900,    
    lg: 1200,   
    xl: 1536,   
  },
};


let theme = createTheme({
  breakpoints,
  palette: {
    mode: 'light',
    primary: {
      main: '#DCE9ED',
      light: '#FFFFFF',
      dark: '#B5D1D9',
      contrastText: '#4B434A',
    },
    secondary: {
      main: '#71CACE',
      light: '#9FDEE1',
      dark: '#4DA7AB',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#4B434A',
      secondary: '#71CACE',
      disabled: '#A0A0A0',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F8F8',
    },
    action: {
      active: '#71CACE',
      hover: 'rgba(113, 202, 206, 0.08)',
      selected: 'rgba(113, 202, 206, 0.16)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    
    h1: {
      color: '#4B434A',
      fontWeight: 600,
      fontSize: '2.5rem', 
      [breakpoints.values.sm]: {
        fontSize: '3rem', 
      },
      [breakpoints.values.md]: {
        fontSize: '3.5rem', 
      },
      [breakpoints.values.lg]: {
        fontSize: '4rem', 
      },
    },
    h2: {
      color: '#4B434A',
      fontWeight: 600,
      fontSize: '2rem', 
      [breakpoints.values.sm]: {
        fontSize: '2.5rem', 
      },
      [breakpoints.values.md]: {
        fontSize: '3rem', 
      },
      [breakpoints.values.lg]: {
        fontSize: '3.5rem', 
      },
    },
    h3: {
      color: '#4B434A',
      fontWeight: 600,
      fontSize: '1.75rem', 
      [breakpoints.values.sm]: {
        fontSize: '2rem', 
      },
      [breakpoints.values.md]: {
        fontSize: '2.25rem', 
      },
      [breakpoints.values.lg]: {
        fontSize: '2.5rem', 
      },
    },
    h4: {
      color: '#4B434A',
      fontWeight: 600,
      fontSize: '1.5rem', 
      [breakpoints.values.sm]: {
        fontSize: '1.75rem', 
      },
      [breakpoints.values.md]: {
        fontSize: '2rem', 
      },
    },
    h5: {
      color: '#4B434A',
      fontWeight: 500,
      fontSize: '1.25rem', 
      [breakpoints.values.sm]: {
        fontSize: '1.5rem', 
      },
      [breakpoints.values.md]: {
        fontSize: '1.75rem', 
      },
    },
    h6: {
      color: '#4B434A',
      fontWeight: 500,
      fontSize: '1rem', 
      [breakpoints.values.sm]: {
        fontSize: '1.15rem', 
      },
      [breakpoints.values.md]: {
        fontSize: '1.25rem', 
      },
    },
    subtitle1: {
      color: '#71CACE',
      fontSize: '1rem', 
      [breakpoints.values.sm]: {
        fontSize: '1.1rem', 
      },
    },
    subtitle2: {
      color: '#71CACE',
      fontSize: '0.875rem', 
      [breakpoints.values.sm]: {
        fontSize: '1rem', 
      },
    },
    body1: {
      color: '#4B434A',
      fontSize: '0.875rem', 
      [breakpoints.values.sm]: {
        fontSize: '1rem', 
      },
      [breakpoints.values.md]: {
        fontSize: '1.1rem', 
      },
    },
    body2: {
      color: '#4B434A',
      fontSize: '0.75rem', 
      [breakpoints.values.sm]: {
        fontSize: '0.875rem', 
      },
      [breakpoints.values.md]: {
        fontSize: '1rem', 
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '0.875rem', 
      [breakpoints.values.sm]: {
        fontSize: '1rem', 
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          
          padding: '6px 12px',
          [breakpoints.values.sm]: {
            padding: '8px 16px',
          },
          [breakpoints.values.md]: {
            padding: '10px 20px',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          backgroundColor: '#DCE9ED',
          color: '#4B434A',
          '&:hover': {
            backgroundColor: '#B5D1D9',
          },
        },
        containedSecondary: {
          backgroundColor: '#71CACE',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#4DA7AB',
          },
        },
        outlinedPrimary: {
          borderColor: '#DCE9ED',
          color: '#4B434A',
          '&:hover': {
            borderColor: '#B5D1D9',
            backgroundColor: 'rgba(220, 233, 237, 0.08)',
          },
        },
        outlinedSecondary: {
          borderColor: '#71CACE',
          color: '#71CACE',
          '&:hover': {
            borderColor: '#4DA7AB',
            backgroundColor: 'rgba(113, 202, 206, 0.08)',
          },
        },
        sizeSmall: {
          padding: '4px 10px',
          fontSize: '0.75rem',
          [breakpoints.values.sm]: {
            padding: '6px 12px',
            fontSize: '0.875rem',
          },
        },
        sizeLarge: {
          padding: '8px 22px',
          fontSize: '0.9375rem',
          [breakpoints.values.sm]: {
            padding: '10px 24px',
            fontSize: '1.125rem',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          
          paddingLeft: '16px',
          paddingRight: '16px',
          [breakpoints.values.sm]: {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          [breakpoints.values.md]: {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
          [breakpoints.values.lg]: {
            paddingLeft: '40px',
            paddingRight: '40px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#DCE9ED',
          color: '#4B434A',
          
          minHeight: '56px',
          [breakpoints.values.sm]: {
            minHeight: '64px',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          
          paddingLeft: '16px',
          paddingRight: '16px',
          minHeight: '56px',
          [breakpoints.values.sm]: {
            paddingLeft: '24px',
            paddingRight: '24px',
            minHeight: '64px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          
          padding: '16px',
          [breakpoints.values.sm]: {
            padding: '20px',
          },
          [breakpoints.values.md]: {
            padding: '24px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          
          margin: '16px',
          width: 'calc(100% - 32px)',
          [breakpoints.values.sm]: {
            margin: '24px',
            width: 'calc(100% - 48px)',
            maxWidth: '600px',
          },
          [breakpoints.values.md]: {
            maxWidth: '800px',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          
          width: '280px',
          [breakpoints.values.sm]: {
            width: '320px',
          },
          [breakpoints.values.md]: {
            width: '360px',
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          
          width: 'calc(100% + 16px)',
          margin: '-8px',
          [breakpoints.values.sm]: {
            width: 'calc(100% + 24px)',
            margin: '-12px',
          },
        },
        item: {
          padding: '8px',
          [breakpoints.values.sm]: {
            padding: '12px',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#4B434A',
          '&:hover': {
            backgroundColor: 'rgba(113, 202, 206, 0.08)',
          },
          
          padding: '8px',
          fontSize: '1.5rem',
          [breakpoints.values.sm]: {
            padding: '12px',
            fontSize: '1.75rem',
          },
        },
        sizeSmall: {
          padding: '4px',
          fontSize: '1.25rem',
          [breakpoints.values.sm]: {
            fontSize: '1.5rem',
          },
        },
        sizeLarge: {
          padding: '12px',
          fontSize: '1.75rem',
          [breakpoints.values.sm]: {
            padding: '16px',
            fontSize: '2rem',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          
          fontSize: '0.875rem',
          [breakpoints.values.sm]: {
            fontSize: '1rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#DCE9ED',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#71CACE',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4DA7AB',
          },
          fontSize: '0.875rem',
          [breakpoints.values.sm]: {
            fontSize: '1rem',
          },
        },
        input: {
          padding: '12px 14px',
          [breakpoints.values.sm]: {
            padding: '16px 14px',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          
          padding: '12px',
          [breakpoints.values.sm]: {
            padding: '16px',
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          
          minWidth: '200px',
          [breakpoints.values.sm]: {
            minWidth: '250px',
          },
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          
          bottom: '16px',
          [breakpoints.values.sm]: {
            bottom: '24px',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          
          fontSize: '0.75rem',
          padding: '6px 10px',
          [breakpoints.values.sm]: {
            fontSize: '0.875rem',
            padding: '8px 12px',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  
  mixins: {
    toolbar: {
      minHeight: 56,
      [breakpoints.values.sm]: {
        minHeight: 64,
      },
    },
  },
});


theme = responsiveFontSizes(theme);

export default theme;