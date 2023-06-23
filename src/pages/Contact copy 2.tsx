import React, { ChangeEvent, useCallback } from 'react';
import { useTus, TusClientProvider, useTusStore } from 'use-tus'

const Contact: React.FC = () => {
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
                            <div className="">
                                <TusClientProvider>
                                    <Uploader />
                                </TusClientProvider>
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

const Uploader = () => {
    const onprogress = (value: any) => {

    }
    const { upload, setUpload, isSuccess, error, remove, } = useTus();


    const handleSetUpload = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target!.files!.item(0);

        if (!file) {
            return;
        }

        setUpload(file, {
            endpoint: 'https://tusd.tusdemo.net/files/',
            metadata: {
                filename: file.name,
                filetype: file.type,
            },
        });
    },
        [setUpload]
    );

    const handleStart = useCallback(() => {
        if (!upload) {
            return;
        }
        // Start upload the file.
        upload.start();
    }, [upload]);

    const handleAbort = useCallback(() => {
        if (!upload) {
            return;
        }
        upload.abort();
    }, [upload]);
    const resume = useCallback(() => {
        if (!upload) {
            return;
        }
        upload.findPreviousUploads().then(function (previousUploads) {
            if (previousUploads.length) {
                upload.resumeFromPreviousUpload(previousUploads[0])
            }
            upload.start()
        })
    }, [upload]);
    const SelectFileComponent = (file: File) => {
        // Create upload accosiated with 'upload-thumbnail' key
        const { setUpload } = useTusStore('upload-thumbnail')

        setUpload(file)
    }

    const UploadFileComponent = () => {
        const { upload } = useTusStore('upload-thumbnail')

        upload!.start()
    }

    return (
        <div>
            <input type="file" onChange={handleSetUpload} />
            <button type="button" onClick={handleStart}>
                Upload
            </button>
            <button type="button" onClick={handleAbort}>
                Abort
            </button>
            <button type="button" onClick={resume}>
                Resume
            </button>
        </div>
    );
};