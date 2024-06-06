const express = require('express');
const app = express();

app.get('/', (req, rest) => {
  rest.send("Welcome to my nodejs app");
});

app.listen(3000, function() {
    console.log("app listening on port 3000")
})