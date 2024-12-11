const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/config.env` });

const mongoose = require('mongoose');
const app = require('./app');

const dbString =
  process.env.NODE_ENV === 'development'
    ? process.env.DATABASE_DEV.replace('<DATABASE>', process.env.DATABASE_NAME)
    : process.env.DATABASE_PROD.replace(
        '<DATABASE>',
        process.env.DATABASE_NAME,
      ).replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(dbString).then(() => {
  console.log('DB CONNECTED');
});

// Starting the server
const port = process.env.PORT;
app.listen(port, (req, res) => {
  console.log(`Server started at port ${port}`);
});
