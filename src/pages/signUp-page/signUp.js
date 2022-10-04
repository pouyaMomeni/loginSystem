import React, { useEffect } from 'react'
import { LanguageList } from '../../data/language'
import { useSignIn } from '../../hook'
import { Schema } from '../../validation/signValid'
//i18next
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
// chakra
import { Box, Container, Text, Input, Button } from '@chakra-ui/react'
//icons
import { GiStoneTower } from 'react-icons/gi'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
//formik
// import * as yup from 'yup'
import { useFormik } from "formik";
//router
import { Link } from 'react-router-dom'
// css
import './signUp.css'
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Sign = () => {
    const addUser = useSignIn()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = LanguageList.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
    }, [currentLanguage, t])

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            const valid = await Schema.isValid(values)
            if (valid) {
                await addUser.mutate(values)
                toast(t('toast'));
            }
        },
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Box display='flex' justifyContent='center' alignItems='center' height='100vh'   >
                    <Container display='flex' flexDirection='column' justifyContent='space-around' bg='primary' w='70%' h='60%' padding='2rem' borderRadius='lg' boxShadow='dark-lg'>
                        {/* 1 */}
                        <Box display='flex' flexDirection='column'>
                            <Text className='cursor-login ' display='flex' gap='0.5rem' alignItems='center' fontSize={['xl', '2xl', '3xl']} textColor='sec' fontWeight='bold'  >{t('sign-massge')}<GiStoneTower /></Text>
                            {/* ---- */}

                            <Box display='flex' className='cursor-login hover-text' textColor='sec' mt='0.5rem' fontSize={['md', 'lg', 'xl']}><Link to='/' >{t('swap-sign')}</Link></Box>
                        </Box>
                        {/* 1 */}
                        {/* 2 */}
                        <Box display='flex' flexDirection='column' gap='0.3rem'>
                            {/* 1 */}
                            <Input color='white'
                                focusBorderColor='sec'
                                width='100%' variant='flushed'
                                placeholder={t('username')} _placeholder={{ color: 'sec' }}
                                id='username'
                                name='username'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            ></Input>
                            {formik.errors.username ?
                                <Text color='red.300'>{formik.errors.username}</Text>
                                : null}
                            {/* 1 */}
                            {/* 2 */}
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
                            {/* 2 */}
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
                        </Box>
                        {/* 2 */}
                        {/* 3 */}
                        <Box display='flex' justifyContent='space-between' >
                            <Button type='submit' width='8rem' colorScheme='green'>{t('sign-massge')}</Button>
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default Sign