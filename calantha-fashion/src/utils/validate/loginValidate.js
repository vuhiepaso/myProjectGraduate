import {isEmpty} from './index'

const validateLoginInput = (data) => {
  let errors = {}
  const {phone, password} = data

  if (!phone || phone.length < 10) {
    errors.phone = 'Your phone at least 10 characters'
  }

  if (!password || password.length < 6) {
    errors.password = 'Your password at least 6 characters'
  }

  if (isEmpty(phone)) {
    errors.phone = 'Your phone name is empty'
  }

  if (isEmpty(password)) {
    errors.password = 'Your password is empty'
  }

  if (isNaN(phone)) {
    errors.phone = 'Your phone number is incorrect'
  }

  return {errors, isValid: isEmpty(errors)}
}

export default validateLoginInput
