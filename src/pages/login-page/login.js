import React, { useEffect } from 'react'
import { useLogin } from '../../hook'
import { Schema } from '../../validation/logValid'
// i18 next
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
//chakra-ui
import { Box, Container, Text, Input, Button } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
// css
import './login.css'
//formik
import { useFormik } from "formik";
//react router
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { LanguageList } from '../../data/language'
// react-icons
import { GiStoneTower } from 'react-icons/gi'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
//redux




const Login = () => {
    const navigate = useNavigate();
    const loginHook = useLogin()
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const currentLanguage = LanguageList.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
    }, [currentLanguage, t])


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            const valid = Schema.isValid(values)
            if (valid) {
                await loginHook.mutate(values)
                Cookies.set('user', 'accessToken')
                navigate('/nav');
            }

        },
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Box display='flex' justifyContent='center' alignItems='center' height='100vh'   >
                    <Container display='flex' flexDirection='column' justifyContent='space-around' bg='primary' w='60%' h='50%' padding='2rem' borderRadius='lg' boxShadow='dark-lg'>
                        {/* 1 */}
                        <Box display='flex' flexDirection='column'>
                            <Text className='cursor-login ' display='flex' gap='0.5rem' alignItems='center' fontSize={['xl', '2xl', '3xl']} textColor='sec' fontWeight='bold'  >{t('login-massge')}<GiStoneTower /></Text>
                            {/* ---- */}
                            <Box display='flex' className='cursor-login hover-text' textColor='sec' mt='0.5rem' fontSize={['md', 'lg', 'xl']}><Link to='/sign' >{t('swap-login')}</Link></Box>
                        </Box>
                        {/* 1 */}
                        {/* 2 */}
                        <Box display='flex' flexDirection='column' gap='0.5rem'>
                            <Input color='white'
                                focusBorderColor='sec'
                                width='100%' variant='flushed'
                                placeholder={t('email')} _placeholder={{ color: 'sec' }}
                                id='email'
                                name='email'
                                type='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            ></Input>
                            {formik.errors.email ?
                                <Text color='red.300'>{formik.errors.email}</Text>
                                : null}
                            <Input color='white'
                                variant='flushed'
                                focusBorderColor='sec' width='100%'
                                placeholder={t('password')} _placeholder={{ color: 'sec' }}
                                id='password'
                                name='password'
                                type='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            ></Input>
                            {formik.errors.password ?
                                <Text color='red.300'>{formik.errors.password}</Text>
                                : null}
                            <Checkbox textColor='sec' mt='2' defaultChecked>{t('checkBox-login')}</Checkbox>
                        </Box>
                        {/* 2 */}
                        {/* 3 */}
                        <Box display='flex' justifyContent='space-between' >
                            <Button type='submit' width='8rem' colorScheme='green'>{t('login-massge')}</Button>
                            <Text display='flex' alignItems='center' textColor='sec' fontSize={['md', 'lg', 'xl']}>{t('or-login')}</Text>
                            <Box display='flex' alignItems='center' gap='4'>
                                <Box className='cursor-login' color='sec'><FaLinkedin size={20} /></Box>
                                <Box className='cursor-login' color='sec'><BsGithub size={20} /></Box>
                                <Box className='cursor-login' color='sec'><AiTwotoneMail size={20} /></Box>
                            </Box>
                        </Box>
                        {/* 3 */}
                    </Container>
                </Box>
            </form>
        </>
    )
}

export default Login