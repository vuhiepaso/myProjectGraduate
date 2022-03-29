import {emailPattern, isEmpty, phonePattern} from '.'

export default ({phone}) => {
  let errors = {}

  if (!phone || !phone.match(phonePattern)) {
    errors.phone = 'Validate.phone-invalid'
  }
  if (isEmpty(phone)) {
    errors.phone = 'Validate.phone-empty'
  }

  return {errors, isValid: isEmpty(errors)}
}
