
// https://github.com/tus/tus-js-client/blob/main/docs/api.md#tusuploadfile-options
// https://github.com/tus/tus-js-client/blob/main/docs/usage.md
// https://github.com/tus/tus-resumable-upload-protocol

import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import * as tus from 'tus-js-client';
import { Upload } from 'tus-js-client';

const UploadComponent: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const uploadObj = useRef<Upload>();
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        setFile(selectedFile || null);
    };

    const handleUpload = () => {
        if (file) {
            var upload = new tus.Upload(file, {
                chunkSize: 5024,
                endpoint: 'https://tusd.tusdemo.net/files/',
                retryDelays: [0, 3000, 5000, 10000, 20000],
                removeFingerprintOnSuccess: true,
                metadata: {
                    filename: file.name,
                    filetype: file.type,
                },
                onError: function (error) {
                    console.log('Failed because: ' + error)
                },
                onProgress: function (bytesUploaded, bytesTotal) {
                    var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
                    console.log(bytesUploaded, bytesTotal, percentage + '%')
                },
                // onChunkComplete: (chunkSize, bytesAccepted, bytesTotal) => {
                //     var percentage = ((bytesAccepted / bytesTotal) * 100).toFixed(2)
                //     console.log(bytesAccepted, bytesTotal, percentage + '%')
                // },
                onSuccess: function () {
                    console.log('Download %s from %s', ' upload.file.name, upload.url')
                },
            })
            upload.findPreviousUploads().then(async (previousUploads) => {
                var chosenUpload = await askToResumeUpload(previousUploads, upload);
                if (chosenUpload) {
                    upload.resumeFromPreviousUpload(chosenUpload);
                }
                upload.start();
            });
            uploadObj.current = upload;
        }
    };
    function askToResumeUpload(previousUploads: tus.PreviousUpload[], upload: Upload) {
        if (previousUploads.length === 0) return null;
        var text = ''/* "You tried to upload this file previously at these times:\n\n" */;
        previousUploads.forEach((previousUpload, index) => {
            text += "[" + index + "] " + moment(previousUpload.creationTime).format('DD/MM/YYYY hh:MM a') + "<br/>";
        });
        text += "Enter the corresponding number to resume an upload or press Cancel to start a new upload";
        return Swal.fire({
            title: 'You tried to upload this file previously at these times:',
            html: text,
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'YES, RESUME',
            denyButtonText: `NO, START OVER`,
        }).then((result) => {
            if (result.isConfirmed) {
                if (!isNaN(result?.value) && previousUploads[result?.value]) {
                    return previousUploads[result?.value];
                }
            }
        })


        var answer = prompt(text);
        var index = parseInt(answer || '0', 10);

        if (!isNaN(index) && previousUploads[index]) {
            return previousUploads[index];
        }
    }
    function startOrResumeUpload(upload: Upload) {
        // Check if there are any previous uploads to continue.
        upload.findPreviousUploads().then((previousUploads) => {
            // Found previous uploads so we select the first one.
            if (previousUploads.length) {
                Swal.fire({
                    title: 'You already started uploading this file just now. Do you want to resume this upload??',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'YES, RESUME',
                    denyButtonText: `NO, START OVER`,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        upload.resumeFromPreviousUpload(previousUploads[0])
                    }
                    upload.start();
                })
            } else {
                upload.start();
            }
        })
    }
    return (
        <div style={{ margin: '50px' }}>
            <input type="file" onChange={handleFileChange} />
            <button style={{ marginRight: '10px' }} onClick={handleUpload}>Upload</button>
            <button onClick={() => {
                if (uploadObj.current) {
                    uploadObj.current.abort();
                }
            }} style={{ marginRight: '10px' }}>Pause</button>
            <button onClick={() => {
                if (uploadObj.current) {
                    startOrResumeUpload(uploadObj.current)
                }
            }} >Resume</button>
        </div>
    );
};

export default UploadComponent;



// import React, { useState } from 'react';
// import * as tus from 'tus-js-client';

// const UploadComponent: React.FC = () => {
//     const [file, setFile] = useState<File | null>(null);

//     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const selectedFile = event.target.files?.[0];
//         setFile(selectedFile || null);
//     };

//     const handleUpload = () => {
//         if (file) {
//             const upload = new tus.Upload(file, {
//                 endpoint: 'https://tusd.tusdemo.net/files/', // Replace with your own upload endpoint
//                 retryDelays: [0, 1000, 3000, 5000],
//                 metadata: {
//                     filename: file.name,
//                     filetype: file.type,
//                 },
//                 onError: (error) => {
//                     console.log('Upload failed:', error);
//                 },
//                 onProgress: (bytesUploaded, bytesTotal) => {
//                     const progress = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
//                     console.log(`Upload progress: ${progress}%`);
//                 },
//                 onSuccess: () => {
//                     console.log('Upload complete');
//                 },
//             });

//             // upload.findPreviousUploads().then(function (previousUploads) {
//             //     // Found previous uploads so we select the first one.
//             //     if (previousUploads.length) {
//             //         upload.resumeFromPreviousUpload(previousUploads[0])
//             //     }

//             //     // Start the upload
//             // })
//             upload.start();

//         }
//     };
//     // function startOrResumeUpload(upload: tus) {
//     //     // Check if there are any previous uploads to continue.
//     //     upload.findPreviousUploads().then(function (previousUploads) {
//     //         // Found previous uploads so we select the first one.
//     //         if (previousUploads.length) {
//     //             upload.resumeFromPreviousUpload(previousUploads[0])
//     //         }

//     //         // Start the upload
//     //         upload.start()
//     //     })
//     // }

//     return (
//         <div>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={handleUpload} style={{ marginRight: '10px' }}>Upload</button>
//             {/* <button onClick={handleUpload} style={{ marginRight: '10px' }}>Pause</button>
//             <button onClick={handleUpload} >Resume</button> */}
//         </div>
//     );
// };

// export default UploadComponent;
