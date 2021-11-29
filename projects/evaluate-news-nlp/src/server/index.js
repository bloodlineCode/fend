//  To get the api key
const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')

const app = express()

// Add cors policy
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('dist'))

console.log(__dirname)

// API information
const baseURLMC = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKeyMC = process.env.API_KEY
console.log(`Your API key is ${process.env.API_KEY}`)

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
  //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

app.get('/healthCheck', function (req, res) {
  console.log('This is the request :', req)
  res.send(mockAPIResponse)
})

// Adding a POST request to handle the route
app.post('/mcapi', async function (req, res) {
  inputURL = req.body.url
  console.log(`Entered URL: ${inputURL}`)
  const finalURL = `${baseURLMC}key=${apiKeyMC}&url=${inputURL}&lang=en`
  // Wait for the result with await
  const response = await fetch(finalURL)
  // Parse the json value
  const mcAPIResponseData = await response.json()
  res.send(mcAPIResponseData)
})
