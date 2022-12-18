import React from 'react';

export const FormErrorMessage = ({ children, className }) => (
  <p className={className}>
    {children}
  </p>
);
