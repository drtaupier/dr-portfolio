const express = require('express');
const app = express();
/*Dependencies*/
const bodyParser = require('body-parser');

/*Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Cors
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

const port = 3000;

const listening = () => console.log(`Running on localhost: ${port}`);

const server = app.listen(port, listening);