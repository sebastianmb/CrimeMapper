import React from 'react';

import { Link } from 'react-router-dom';

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export const Login = () => {
  return (
    <>
      <header className='flex place-content-between items-center bg-cyan-900 mb-14'>
        <a className='cursor-pointer text-2xl text-white p-3' >Dropit</a>
      </header>
      <div className='bg-gray-light mt-20 flex items-center justify-center'>
        <SignedOut>
          <SignInButton mode ='modal' forceRedirectUrl='/Panel'/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        
       
      </div>
    </>
  );
};


