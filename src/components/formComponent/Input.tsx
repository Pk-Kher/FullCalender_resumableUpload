import { ErrorMessage, Field } from 'formik';
import React from 'react'
import Error from './Error';

const Input: React.FC<{ name: string, [key: string]: any }> = ({ name, ...rest }) => {
    return (
        <>
            <Field type={'text'} name={name} className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} {...rest} />
            <ErrorMessage name={name} component={Error} />
        </>
    )
}

export default Input;
