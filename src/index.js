const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// for testing purposes only
app.get('/', (req, res) => {
    res.send("<h2>It's working!</h2>");
});

app.listen(PORT), () => {
    console.log("API listening on port " + port);
};
