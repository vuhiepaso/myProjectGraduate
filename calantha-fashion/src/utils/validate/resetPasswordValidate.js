import {emailPattern, isEmpty} from '.'

export default ({password, confirmPassword}) => {
  let errors = {}

  if (!password || password.length < 6) {
    errors.password = 'Validate.password-length'
  }
  if (!confirmPassword || confirmPassword.length < 6) {
    errors.confirmPassword = 'Validate.confirm-password-length'
  }
  if (confirmPassword !== password) {
    errors.confirmPassword = 'Validate.password-not-match'
  }
  if (isEmpty(password)) {
    errors.password = 'Validate.password-empty'
  }

  return {errors, isValid: isEmpty(errors)}
}
