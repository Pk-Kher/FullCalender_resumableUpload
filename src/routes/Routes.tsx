import React from 'react'
import { Route, Routes as ReactRoute } from 'react-router-dom'
const Routes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <ReactRoute>
                {children}
                <Route path={'*'} element={<>Page Not found.</>} />
            </ReactRoute>
        </>
    )
}

export default Routes;