import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import React from 'react';


const Contact: React.FC = () => {
    const path = {
        chunkSize: 102400,
        // set chunk size for enable the chunk upload
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    return (
        <>
            <title>Contact US</title>
            <section className="bg-indigo-100 ">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email<span className='text-red-600 ml-1'>*</span></label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " placeholder="name@flowbite.com" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject<span className='text-red-600 ml-1'>*</span></label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500  " placeholder="Let us know how we can help you" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message<span className='text-red-600 ml-1'>*</span></label>
                            <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900">Your File<span className='text-red-600 ml-1'>*</span></label>
                            <div className="chunkupload">
                                <UploaderComponent id='chunkupload' type='file' autoUpload={false} asyncSettings={path} />
                            </div>
                        </div>

                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">Send message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;