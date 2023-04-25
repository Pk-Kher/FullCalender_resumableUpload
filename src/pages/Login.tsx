import axios from 'axios';
import { Formik, Form } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from "yup"
import Input from '../components/formComponent/Input';
import Csrf from "../api/Csrf";

const Login: React.FC = () => {
    const loginHandler = (values: { email: string, password: string }, actions: any) => {
        Csrf().then(response => {
            axios.post<{ email: string, password: string, remember: string }>('api/login', values).then((response) => {
                console.log(response);
            }).catch(error => {

            });
        })
    }
    const validations = Yup.object({
        email: Yup.string().required('User name is required.'),
        password: Yup.string().required('Password is required.'),
    });
    return (
        <>
            <title>Login</title>
            <div className="relative items-center ">
                <div className="items-center z-10">
                    <div className="min-h-screen h-full flex justify-center items-center w-full">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                                <div className="sm:mx-auto sm:w-full sm:max-w-md -6 text-center justify-center mb-10">
                                    <h1 className="text-3xl text-gray-800 font-bold mb-6 items-center text-center flex justify-center">
                                        <img src={'/'} alt="Login" className="w-60 items-center mx-auto" />
                                    </h1>
                                </div>

                                {/* <!-- Form --> */}
                                <Formik
                                    initialValues={{ email: "", password: "" }}
                                    onSubmit={loginHandler}
                                    validationSchema={validations}
                                >
                                    {({ errors, setFieldValue, values }) => {
                                        return (
                                            <Form>
                                                <div className="space-y-6">
                                                    <div>
                                                        <label
                                                            className="block text-sm font-medium text-gray-700"
                                                            htmlFor="email"
                                                        >
                                                            Email Address
                                                        </label>
                                                        <Input
                                                            type="text"
                                                            name="email"
                                                            id="email"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label
                                                            className="block text-sm font-medium text-gray-700"
                                                            htmlFor="password"
                                                        >
                                                            Password
                                                        </label>
                                                        <Input
                                                            type="password"
                                                            name="password"
                                                            id="password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between mt-6">
                                                    <div className="text-sm">
                                                        <Link
                                                            to={"/forgot-password"}
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        >
                                                            Forgot your password?
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between mt-6">
                                                    <button
                                                        className={`w-full flex justify-center align-middle py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer`}
                                                    >
                                                        Sign In
                                                    </button>
                                                </div>
                                            </Form>
                                        );
                                    }}

                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;