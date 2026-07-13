import './dotenv.config' // loads .env files

import express from 'express'
import path from 'node:path'

const app = express()
const port = process.env.port || 3000

app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/', (_req, res) =>
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
)

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})