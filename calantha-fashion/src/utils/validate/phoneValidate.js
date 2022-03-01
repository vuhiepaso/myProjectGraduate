import {isEmpty} from './index'

const validatePhone = (phone) => {
  let errors = {}

  if (!phone || phone.length < 10) {
    errors.phone = 'Your phone at least 10 characters'
  }
  if (isEmpty(phone)) {
    errors.phone = 'Your phone name is empty'
  }
  if (isNaN(phone)) {
    errors.phone = 'Your phone number is incorrect'
  }

  return {errors, isValid: isEmpty(errors)}
}

export default validatePhone
