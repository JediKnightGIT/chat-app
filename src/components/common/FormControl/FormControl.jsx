import emailValidator from '../utils/validators'

const FormControl = ({ label, labelId, child, ...props }) => {
  return (
    <div className="input-group">
      <label htmlFor={labelId}>{label}</label>
      {/* <input {...register("email", {
        required: "Email Address is required",
        pattern: {
          value: emailPattern,
          message: 'Please enter valid email'
        }
      })}
        aria-invalid={errors.email ? "true" : "false"} type="email" className="form-control" id={labelId} />
         */}
      {props.child}
      {errorElement.email}
    </div>
  )
}

export const Input = ({ label, labelId, requiredText, ...props }) => {
  return (
    <FormControl {...props}>
      <label htmlFor={labelId}>{label}</label>
      <input {...register("email", emailValidator)}
        aria-invalid={errors.email ? "true" : "false"} type="email" className="form-control" id={labelId} />

    </FormControl>
  )
}