function handleError(error, showDialog, setTitle, setContent) {
  showDialog(true)
  setTitle(error?.response?.status || '500')
  setContent(error?.response?.data?.message || 'Server error')
}

export default handleError
