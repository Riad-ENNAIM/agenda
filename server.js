const express = require('express');
const auth = require('./routes/auth');
const users = require('./routes/users');
const contacts = require('./routes/contacts');

const app = express();

// Routes
app.use('/api/auth', auth)
app.use('/api/users', users)
app.use('/api/contacts', contacts)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));