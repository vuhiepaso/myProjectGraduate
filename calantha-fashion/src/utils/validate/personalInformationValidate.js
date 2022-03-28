import {emailPattern, isEmpty} from '.'

export default ({name, birthday}) => {
  let errors = {}
  if (!name || name.length < 6) {
    errors.password = 'Validate.password-length'
  }
  if (!birthday || birthday.length < 10) {
    errors.confirmPassword = 'Validate.birthday-length'
  }
  if (isEmpty(name)) {
    errors.name = 'Validate.email-empty'
  }
  if (isEmpty(birthday)) {
    errors.birthday = 'Validate.phone-empty'
  }

  return {errors, isValid: isEmpty(errors)}
}
