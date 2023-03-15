import React from 'react'

const Error = ({ children }: { children?: React.ReactNode }) => {

    return (
        <span className='text-red-600'>{children}</span>
    )
}

export default Error