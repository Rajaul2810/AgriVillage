import React from 'react'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { HiOfficeBuilding } from 'react-icons/hi'

const Contact = () => {
    return (
        <section>
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">Let&apos;s Connect</h2>
                                <p className="text-gray-600">We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-emerald-100 p-3 rounded-full">
                                        <HiOfficeBuilding className="text-2xl text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Office Address</h3>
                                        <p className="text-gray-600 text-sm">SMART-trend Digital</p>
                                        <p className="text-gray-600 text-sm">Suite # 4A, House # 3B, Road # 49,</p>
                                        <p className="text-gray-600 text-sm">Gulshan 2, Dhaka 1212, Bangladesh</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-emerald-100 p-3 rounded-full">
                                        <FiMail className="text-2xl text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                                        <a href="mailto:sav@smarttrenddigital.com" className="text-emerald-600 hover:text-emerald-700 text-sm">sav@smarttrenddigital.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-emerald-100 p-3 rounded-full">
                                        <FiPhone className="text-2xl text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                                        <a href="tel:+8801854555530" className="text-emerald-600 hover:text-emerald-700 text-sm">+88 01854555530</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input 
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input 
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-2 font-medium"
                                >
                                    Send Message
                                    <FiSend />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact