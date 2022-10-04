import { extendTheme } from '@chakra-ui/react'

// example theme
const Theme = extendTheme({
    styles: {
        global: {
            body: {
                'font-family': 'real',
            }
        }
    },
    Config: {
        intialColorMode: 'dark',
        useSystemColorMode: true,
    },
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: '#03071e',
        sec: '#386641',
        gray: {
            50: '#f7fafc',
            900: '#171923',
        }
    },
});

export default Theme