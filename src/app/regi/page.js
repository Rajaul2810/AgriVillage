"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Image from 'next/image';
import login from '../../../public/assets/head.jpg'
import Link from 'next/link'


const Registration = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: yup.object({
            name: yup.string().required('Name is required'),
            phone: yup.string().required('Phone is required'),
            email: yup.string().email('Invalid email address').required('Email is required'),
            password: yup.string().required('Password is required').min(4, 'Password must be at least 4 characters'),
            confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 1));
            console.log(values)
        },
    });

    return (
        <section>
            <div className='page_banner h-56 relative grid place-content-center bg-cover bg-center bg-no-repeat'>
                <p className=' text-white text-2xl font-semibold pt-5 blur-none'>Registration</p>
            </div>

            <section className='bg-lime-50'>
                <div className=' flex justify-center pt-5 pb-5'>
                    <div className=' w-full md:w-4/5 lg:3/5 grid grid-cols-1 sm:grid-cols-2 card bg-base-100 shadow-xl m-5 pt-10 pb-10 px-5 py-3'>
                        <div>
                            <h1 className=' font-bold text-xl text-center'>Login</h1>
                            <div className=' flex justify-center '>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className={`form-input input input-bordered input-accent w-full ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.name && formik.errors.name && (
                                            <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <input
                                            type="number"
                                            id="phone"
                                            name="phone"
                                            className={`form-input input input-bordered input-accent w-full ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : ''}`}
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.phone && formik.errors.phone && (
                                            <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>
                                        )}
                                    </div>

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

                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            className={`form-input input input-bordered input-accent w-full ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''
                                                }`}
                                            value={formik.values.confirmPassword}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                            <p className="mt-1 text-sm text-red-500">{formik.errors.confirmPassword}</p>
                                        )}
                                    </div>

                                    <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
                                        Register
                                    </button>
                                </form>
                            </div>
                            <p className=' text-center text-gray-400 text-sm mb-4 mt-4'>Already Have An Account? <Link href='/login'><span className=' text-green-500 underline'>Login</span></Link> </p>
                        </div>
                        <div>
                            <Image src={login} alt='login' className=' h-full w-full rounded-md' />
                        </div>
                    </div>
                </div>

            </section>
           
        </section>
    );
};

export default Registration;
