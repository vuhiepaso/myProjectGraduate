function handleSuccess(data) {
  if (data.message === 'error') {
    alert('' + data.error)
  } else {
  }
}

export default handleSuccess
