import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../router'

function AppRouter() {
    return (
        <Routes>
            {routes.map(route => (
                <Route
                    path={route.path}
                    element={<route.element/>}
                    key={route.path}
                />
            ))}
            <Route path="/*" element={<Navigate to="/catalog" replace/>}/>
        </Routes>
    )
}

export default AppRouter