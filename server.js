require( "dotenv" ).config();

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + `/dist/${process.env.APPLICATION_NAME}`));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+`/dist/${process.env.APPLICATION_NAME}/index.html`));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log(`${process.env.APPLICATION_NAME} is running on port ${process.env.PORT}`);
});
