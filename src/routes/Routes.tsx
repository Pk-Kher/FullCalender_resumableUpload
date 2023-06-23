import React from 'react'
import { Route, Routes as ReactRoute } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound';
const Routes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <ReactRoute>
                {children}
                <Route path={'*'} element={<PageNotFound />} />
            </ReactRoute>
        </>
    )
}

export default Routes;