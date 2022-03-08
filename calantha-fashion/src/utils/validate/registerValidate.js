import {emailPattern, isEmpty} from '.'

const validateRegister = ({email, phone, password, confirmPassword}) => {
  let errors = {}

  if (!email || !email.toLowerCase().match(emailPattern)) {
    errors.email = 'Your email is invalid'
  }
  if (!phone || phone.length < 10) {
    errors.phone = 'Your phone number at least 10 characters'
  }
  if (!password || password.length < 6) {
    errors.password = 'Your password at least 6 characters'
  }
  if (!confirmPassword || confirmPassword.length < 6) {
    errors.confirmPassword = 'Your confirm password at least 6 characters'
  }
  if (confirmPassword != password) {
    errors.confirmPassword = 'Your confirm password and password not match'
  }
  if (isEmpty(email)) {
    errors.email = 'Your email is empty'
  }
  if (isEmpty(phone)) {
    errors.phone = 'Your phone is empty'
  }
  if (isEmpty(password)) {
    errors.password = 'Your password is empty'
  }
  if (isEmpty(confirmPassword)) {
    errors.confirmPassword = 'Your confirm password is empty'
  }

  return {errors, isValid: isEmpty(errors)}
}

export default validateRegister
