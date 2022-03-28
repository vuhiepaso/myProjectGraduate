import {isEmpty, phonePattern} from '.'

export default ({recipient_name, phone, address}) => {
  let errors = {}

  if (!recipient_name || recipient_name.length < 6) {
    errors.recipient_name = 'Validate.recipient-name-length'
  }
  if (!address || address.length < 6) {
    errors.address = 'Validate.address-length'
  }
  if (!phone || !phone.match(phonePattern)) {
    errors.phone = 'Validate.phone-invalid'
  }
  if (isEmpty(recipient_name)) {
    errors.recipient_name = 'Validate.recipient-name-empty'
  }
  if (isEmpty(phone)) {
    errors.phone = 'Validate.phone-empty'
  }
  if (isEmpty(address)) {
    errors.phone = 'Validate.address-empty'
  }

  return {errors, isValid: isEmpty(errors)}
}
