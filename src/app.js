import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './components/privateRoute/privateRouter'
import Mod from './components/buttons/mode'

// pages
import Login from './pages/login-page/login'
import Sign from './pages/signUp-page/signUp'
import MainPage from './pages/main-page'

const qc = new QueryClient()
const App = () => {
    return (
        <QueryClientProvider client={qc}>
            <BrowserRouter>
                <Mod />
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/sign' element={<Sign />} />
                    <Route path='/nav' element={
                        <PrivateRouter>
                            <MainPage />
                        </PrivateRouter>
                    } />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>

    )
}

export default App