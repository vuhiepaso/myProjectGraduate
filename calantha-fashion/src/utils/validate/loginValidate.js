import {isEmpty} from './index'

const validateLoginInput = (data) => {
  let errors = {}
  const {phone, password} = data

  if (!phone || phone.length < 10 || isNaN(phone)) {
    errors.phone = 'Login.validate.phone-invalid'
  }
  if (!password || password.length < 6) {
    errors.password = 'Login.validate.password-length'
  }
  if (isEmpty(phone)) {
    errors.phone = 'Login.validate.phone-empty'
  }
  if (isEmpty(password)) {
    errors.password = 'Your password is empty'
  }

  return {errors, isValid: isEmpty(errors)}
}

export default validateLoginInput
