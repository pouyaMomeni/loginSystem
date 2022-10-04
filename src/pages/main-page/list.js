import React, { useEffect } from 'react'
// import axios from 'axios'
import { Sparklines, SparklinesLine } from 'react-sparklines';
// import { useQuery } from 'react-query'
import { LanguageList } from '../../data/language'
// i18next
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
//hook
import { useAllProducts } from '../../hook';
// chakra
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { Box, Image } from '@chakra-ui/react'


const List = () => {
    const { data, isLoading } = useAllProducts()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = LanguageList.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
    }, [currentLanguage, t])
    if (isLoading) return <p>loading...</p>
    return (
        <Box maxWidth='1200px' mx='auto' my='4rem'>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>{t('info-list')}</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>{t('id-list')}</Th>
                            <Th>{t('name-list')}</Th>
                            <Th >{t('price-list')}</Th>
                            <Th >{t('change-list')}</Th>
                            <Th >{t('spark-list')}</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((value, index) => {
                            return (
                                <Tr key={index}>
                                    <Td scope="row">{index + 1}</Td>
                                    <Td display='flex' alignItems='center' ><Image width='35px' mx='6px' height='35px' src={value.image} alt="s" /> {value.name}</Td>
                                    <Td>{value.current_price} $</Td>
                                    <Td >{value.price_change_24h}</Td>
                                    <Td  ><Sparklines data={value.sparkline_in_7d.price}>
                                        <SparklinesLine color='blue' />
                                    </Sparklines></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default List