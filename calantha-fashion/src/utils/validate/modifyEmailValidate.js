import { emailPattern, isEmpty, phonePattern } from '.'

export default ({ email }) => {
  let errors = {}

  if (!email || !email.toLowerCase().match(emailPattern)) {
    errors.email = 'Validate.email-invalid'
  }

  if (isEmpty(email)) {
    errors.email = 'Validate.email-empty'
  }

  return { errors, isValid: isEmpty(errors) }
}
