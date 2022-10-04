import React from 'react'
import { Box, Button, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import { GrLanguage } from 'react-icons/gr'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import i18next from 'i18next'



function Mod() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box pos='fixed' top='40%' right='0' display='flex' flexDirection='column' mx='0.5rem'   >
            <Button my='0.5rem' onClick={() => toggleColorMode()}>{colorMode === 'dark' ? <MoonIcon /> : <SunIcon color='yellow.500' />}</Button>
            <Menu>
                <MenuButton as={Button}  >
                    <Text mx='auto'><GrLanguage size={20} /></Text>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => i18next.changeLanguage('en')}>English</MenuItem>
                    <MenuItem onClick={() => i18next.changeLanguage('fa')}>فارسی</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default Mod