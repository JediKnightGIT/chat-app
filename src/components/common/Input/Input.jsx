import React, { forwardRef } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import get from 'lodash.get';
import classNames from 'classnames';

import { FormErrorMessage } from './form-error-message';


export const FormInput = forwardRef(({ id, label, classNameWrapper, className, name, register, rules, errors, ...props }, ref) => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <div ref={ref} className={classNameWrapper} aria-live="polite">
      <label className="input-label" htmlFor={id}>{label}</label>
      <Input id={id} name={name} aria-invalid={hasError}
        className={classNames(className, {
          'error-message':
            hasError
        })}
        {...props}
        {...(register && register(name, rules))}
      />
      <ErrorMessage errors={errors} name={name}
        render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
      />
    </div>
  )
})

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
  (props, ref) => {
    return (
      <input ref={ref} id={props.id} name={props.name} type={props.type} aria-label={props.label}
        placeholder={props.placeholder} className={classNames('form-control', props.className)}
        {...props}
      />
    );
  }
);

// export const InputRHK = forwardRef(
//   (props, ref) => {
//     return (
//       <input ref={ref} id={props.id} name={props.name} type={props.type} aria-label={props.label}
//         placeholder={props.placeholder} className={classNames('form-control', props.className)}
//         {...props}
//       />
//     );
//   }
// );