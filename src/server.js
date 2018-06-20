import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './client/App'
import renderFullPage from './client/renderFullPage'

const PORT = 8080
const app = express()

app.get('/', (req, res) => {
  const body = renderToString(<App />)
  const title = 'Server side Rendering'
  res.send(renderFullPage({body, title}))
})

app.listen(PORT)
console.log(`running on port ${PORT}`)
