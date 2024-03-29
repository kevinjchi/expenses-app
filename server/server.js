const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3000;
 
app.use(express.static(publicPath));
 
app.use((req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
 
app.listen(PORT, () => {
    console.log(`Server up and running on port: ${PORT}`);
});