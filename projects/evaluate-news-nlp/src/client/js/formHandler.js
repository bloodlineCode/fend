function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('url').value
  console.log('Form URL value:', formText)

  if (NLPClient.validateInput(formText)) {
    console.log('::: Form Submitted :::')

    postData('http://localhost:8080/mcapi', { url: formText }).then(function (
      res,
    ) {
      document.getElementById(
        'scoreTag',
      ).innerHTML = `Score Tag: ${res.score_tag}`
      document.getElementById(
        'agreement',
      ).innerHTML = `Agreement: ${res.agreement}`
      document.getElementById(
        'subjectivity',
      ).innerHTML = `Subjectivity: ${res.subjectivity}`
      document.getElementById(
        'confidence',
      ).innerHTML = `Confidence: ${res.confidence}`
      document.getElementById('irony').innerHTML = `Irony: ${res.irony}`
    })
  } else {
    alert('Invalid URL !!! please try with a valid URL e.g. www.google.com ')
  }
}

const postData = async (url = '', data = {}) => {
  console.log('Analyzing:', data)
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  try {
    const newData = await response.json()
    console.log('Data received:', newData)
    return newData
  } catch (error) {
    console.log('error', error)
  }
}

export { handleSubmit }
