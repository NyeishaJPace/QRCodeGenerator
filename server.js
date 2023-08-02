const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Your QR code generation logic can go here

app.use(express.static('public')); // Serve static files from the "public" folder

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
