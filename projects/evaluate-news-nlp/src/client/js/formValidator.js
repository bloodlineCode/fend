function validateInput(inputURLValue) {
  // Using regex to validate the input
  var urlRegexResult = inputURLValue.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  )

  if (urlRegexResult == null) {
    return false
  } else {
    return true
  }
}

export { validateInput }
