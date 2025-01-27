import React from 'react';
import { Navigate } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const PrivateRoute = ({ element: Component }) => {
  return (
    <>
      <SignedIn>
        {Component}
      </SignedIn>
      <SignedOut>
        <Navigate to="/" />
      </SignedOut>
    </>
  );
};

export default PrivateRoute;
