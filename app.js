const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 9000

app.use(express.static('dist'))

app.listen(PORT, '0.0.0.0', () => {
  console.log('server started on port 9000')
})
