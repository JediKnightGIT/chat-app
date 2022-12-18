import React, { forwardRef } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import get from 'lodash.get';
import classNames from 'classnames';

import { FormErrorMessage } from './form-error-message';


export const FormInput = ({ id, label, className, name, register, rules, errors, ...props }) => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <div className={className} aria-live="polite">
      <label htmlFor={id}>{label}</label>
      <Input id={id} name={name} aria-invalid={hasError}
        className={classNames({
          'error-message':
            hasError
        })}
        {...props}
        {...(register && register(name, rules))}
        onChange={props.onChange}
      />
      <ErrorMessage errors={errors} name={name}
        render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
      />
    </div>
  )
}

export const Textarea = ({ className, name, placeholder, register, rules, errors, ...props }) => {
  // If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so we are using lodash get
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <textarea name={name} placeholder={placeholder} aria-invalid={hasError}
      className={classNames(
        className,
        { 'error-message': hasError }
      )}
      {...props}
      {...(register && register(name, rules))}
    >
    </textarea>
  );
};

export const Input = forwardRef(
  (
    { id, name, label,
      type = 'text', size = 'medium', className = '',
      placeholder, ...props
    },
    ref
  ) => {
    return (
      <input id={id} ref={ref} name={name} type={type} aria-label={label} onChange={props.onChange}
        placeholder={placeholder} className={classNames('form-control', className)}
        {...props}
      />
    );
  }
);