const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

require('./routes/index')(app);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}.`);
});

module.exports = app;
