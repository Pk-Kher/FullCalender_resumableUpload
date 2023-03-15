import React from 'react'
import { Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Routes from './Routes'

const Index: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<MainLayout />} />
            </Routes>
        </>
    )
}

export default Index;