import {isEmpty} from './index'

const validatePhone = (phone) => {
  let errors = {}

  if (!phone || phone.length < 10 || isNaN(phone)) {
    errors.phone = 'ForgotPassword.validate.phone-invalid'
  }
  if (isEmpty(phone)) {
    errors.phone = 'ForgotPassword.validate.phone-empty'
  }

  return {errors, isValid: isEmpty(errors)}
}

export default validatePhone
