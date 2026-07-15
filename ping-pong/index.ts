import express from 'express'

const app = express()
const port = process.env.port || 3000

let counter = 0

app.get('/ping', (_req, res) =>
  res.send(`pong: ${++counter}`)
)

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})