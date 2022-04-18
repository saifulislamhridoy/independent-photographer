import React from 'react';

const Blogs = () => {
    return (
        <div className='h-[80vh] mt-[120px]'>
            <div className='bg-sky-400 p-4 mx-4 rounded mb-4'>
                <p className='font-bold'>Difference between authorization and authentication?</p>
                <p><span className='font-bold'>Answer:</span>Authentication means to confirm your own identity, while authorization means to grant access to the system. In simple terms, authentication verifies who you are, while authorization verifies what you have access to.</p>
            </div>
            <div className='bg-sky-400 p-4 mx-4 rounded mb-4'>
                <p className='font-bold'>What other services does firebase provide other than authentication?</p>
               <p><span className='font-bold '>Answer:</span>
                   Cloud Firestore, Cloud Functions,Hosting, Hosting, Cloud Storage,Google Analytics,Predictions,Cloud Messaging, Dynamic Links,Remote Config</p> 
            </div>
            <div className='bg-sky-400 p-4 mx-4 rounded mb-4'>
                <p className='font-bold'>Why are you using firebase??</p>
                <p><span className='font-bold'>Answer:</span> I used firebase because its provide authentication and hosting system etc. I can use Firebase functionality system easily .</p>
                <p className='font-bold'>What other options do you have to implement authentication??</p>
                <p><span className='font-bold'>Answer:</span>Parse, Back4App, AWS Amplify, Kuzzle etc.</p>
            </div>
        </div>
    );
};
export default Blogs;