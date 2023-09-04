"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link'
import { BsArrowRightCircle } from 'react-icons/bs';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup.string().email('Invalid email address').required('Email is required'),
            password: yup.string().required('Password is required').min(4, 'Password must be at least 4 characters'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 1));
            console.log(values)
        },
    });
    return (
        <section>
            <div className='page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat'>
                <p className=' text-white text-2xl font-semibold pt-5 blur-none'>Login</p>
            </div>
            <section className=' bg-lime-50'>
                <div className=' flex justify-center'>
                    <div className='p-8 bg-base-100 shadow-xl m-8 rounded-md'>
                        <div>
                            <h1 className=' font-bold text-xl text-center'>Login</h1>
                            <div className=' flex justify-center '>
                            <form onSubmit={formik.handleSubmit}>
                                   
                                    <div className="mb-3">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={`form-input input input-bordered input-accent w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className={`form-input input input-bordered input-accent w-full  ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.password && formik.errors.password && (
                                            <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
                                        )}
                                    </div>

                                    <button type="submit" className=" bg-gradient-to-r from-green-600 to-lime-400 text-white py-2 px-5 rounded-full shadow-lg text-md transform hover:scale-105 duration-500 flex items-center gap-1">
                                        Login <BsArrowRightCircle/>
                                    </button>
                                </form>
                            </div>
                            <p className=' text-center text-gray-400 text-sm mb-4 mt-4'>Create An Account? <Link href='/regi'><span className=' text-green-500 underline'>Registration</span></Link> </p>
                        </div>
                      
                    </div>
                </div>

            </section>
        </section>
    )
}

export default Login