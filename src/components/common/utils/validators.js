const EMAIL = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/

export const required = (fieldName) => ({
  required: `${fieldName} is required`
})

export const emailValidator = (fieldName) => ({
  required: `${fieldName} is required`,
  pattern: {
    value: EMAIL,
    message: 'Please enter valid email'
  },
})

// export const minLength = (minLength) => ({
//   required: true,
//   min: minLength
// })