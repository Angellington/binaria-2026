import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export function isMobile() {
    const theme = useTheme(); 
    return useMediaQuery(theme.breakpoints.down('sm'));
}

export function isTablet() { 
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down('md'));
}


export function isDesktop() {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.up('md'));
}

export function isSmallDesktop() {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.between('md', 'lg'));
}

export function isLargeDesktop() {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.up('lg'));
}


export function useResponsive() {
    const theme = useTheme();
    
    return {
        isMobile: useMediaQuery(theme.breakpoints.down('sm')),
        isTablet: useMediaQuery(theme.breakpoints.between('sm', 'md')),
        isDesktop: useMediaQuery(theme.breakpoints.up('md')),
        isSmallDesktop: useMediaQuery(theme.breakpoints.between('md', 'lg')),
        isLargeDesktop: useMediaQuery(theme.breakpoints.up('lg')),
        
        
        isPortrait: useMediaQuery('(orientation: portrait)'),
        isLandscape: useMediaQuery('(orientation: landscape)'),
    };
}