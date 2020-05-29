const port = process.env.MONGODB_URI || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/spotme-db'
const secret = process.env.MONGODB_URI || 'secret'

module.exports = {
  port,
  dbURI,
  secret
}