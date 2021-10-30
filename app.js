const express = require('express')
const app = express()
const mongoose = require('mongoose')
const env = require('dotenv')

// Set up Misc.
env.config()
app.use(express.json())

// Import Routes
// const AdminRoutes = require('./routes/AdminRoutes')
const UserRoutes = require('./routes/UserRoutes')
const VendorRoutes = require('./routes/VendorRoutes')

// Register Routes
// app.use('/admin', AdminRoutes)
app.use('/user', UserRoutes)
app.use('/vendor', VendorRoutes)


// Set Locals
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_URI, () => {
    console.log('DB Connected!')
    app.listen(PORT, () => {console.log(`Server running on port ${PORT} 🔥`)});
})