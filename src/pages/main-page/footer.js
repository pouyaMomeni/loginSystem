import React, { useEffect } from 'react'
import './nav.css'
import { LanguageList } from '../../data/language'
//react-icons
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
// i18next
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
//chakra
import { Box, Text } from '@chakra-ui/react'
const Footer = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = LanguageList.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
    }, [currentLanguage, t])
    return (
        <Box display='flex' height='3rem' justifyContent='space-around' alignItems='center' bg='primary'>
            <Text color='sec'>name@mail.com</Text>
            <Box display='flex' alignItems='center' gap='5'>
                <Box className='cursor-login' color='sec'><FaLinkedin size={20} /></Box>
                <Box className='cursor-login' color='sec'><BsGithub size={20} /></Box>
                <Box className='cursor-login' color='sec'><AiTwotoneMail size={20} /></Box>
            </Box>
            <Text color='sec'>+00-000-000</Text>
        </Box>
    )
}

export default Footer