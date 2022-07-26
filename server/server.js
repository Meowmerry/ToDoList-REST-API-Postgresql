const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');


const PORT = 3000;
const app = express()

const listRoute = require('./routes/api')


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', listRoute);

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.message.err);
    return res
      .status(errorObj.status)
      .json({ status: errorObj.status, ...errorObj.message });
  });


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;