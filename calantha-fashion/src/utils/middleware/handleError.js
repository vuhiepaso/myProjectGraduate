function handleError(error, showDialog, setTitle, setContent) {
  showDialog(true)
  setTitle(error?.response?.status)
  setContent(error?.response?.data?.message)
}

export default handleError
