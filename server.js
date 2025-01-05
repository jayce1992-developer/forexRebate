const { createServer } = require('http')
const path = require('path')
const next = require('next')
const express = require('express')
const fs = require('fs')

const app = next({
  dev: false,
  dir: path.resolve(__dirname)
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.get('/version.txt', (req, res) => {
    res.sendHeader('Content-Type', 'application/json')
    res.send(123)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(8080, err => {
    if(err) throw err
    console.log('ready on https://localhost:8080')
  })
})
