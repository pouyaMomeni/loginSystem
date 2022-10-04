import React, { useEffect } from 'react'
import { LanguageList } from '../../data/language'
import { exite } from '../../store/reducers/tokenReducer'
import { useDispatch } from 'react-redux'
//css
import './nav.css'
// chakra
import { Box, Text } from '@chakra-ui/react'
//router
import { useNavigate } from 'react-router-dom'
//icons
import { GiStoneTower } from 'react-icons/gi'
// i18next
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const exiteBtn = () => {
        dispatch(exite())
        return navigate('/')
    }
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = LanguageList.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
    }, [currentLanguage, t])
    return (
        <>
            <Box mx='auto' alignItems='center'>
                <Box w='100%' height='4rem' bg='primary' display='flex' justifyContent='space-around' px='10px'>
                    <Text display='flex' alignItems='center' color='sec' fontSize={['2xl', '3xl', '4xl']} alignSelf='center'><GiStoneTower /><Text fontSize={['lg', 'xl', '2xl']}>{t('name-nav')}</Text></Text>
                    <Text className='cursor-nav hover-text-nav' color='sec' fontSize={['lg', 'xl', '2xl']} alignSelf='center' onClick={() => exiteBtn()}>{t('exite-nav')}</Text>
                </Box>
            </Box>
        </>
    )
}

export default Nav