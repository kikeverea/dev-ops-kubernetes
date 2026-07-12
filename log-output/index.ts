import crypto from 'crypto'

const str = crypto.randomBytes(20).toString('hex')

const printStr = (str: string) =>
  console.log(`${new Date().toISOString()}:`, str)

printStr(str)

setInterval(() => printStr(str), 5000)

