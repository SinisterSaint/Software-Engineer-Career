const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/register', require('./routes/register'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});