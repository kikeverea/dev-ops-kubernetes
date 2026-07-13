import crypto from 'crypto'
import express from 'express'

const str = crypto.randomBytes(20).toString('hex')
const formatString = (str: string) => `${new Date().toISOString()}: ${str}`
const printStr = (str: string) => console.log(formatString(str))

const app = express()
const port = process.env.port || 3000

printStr(str)
setInterval(() => printStr(str), 5000)

app.get('/', (_req, res) =>
  res.send(formatString(str))
)

app.listen(port, () => console.log(`Server started in port ${port}`))