import './dotenv.config' // loads .env files

import express from 'express'
const app = express()
const port = process.env.port || 3000

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})