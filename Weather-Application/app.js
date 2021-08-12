const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Rutas
const router = require('./routes/router');
const tiempoRouter = require('./routes/tiempo');
const paisRouter = require('./routes/paisRouter');

const app = express();
app.use(cors());

// public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routers
app.use('/api/history', router);
app.use('/api/tiempo', tiempoRouter);
app.use('/api/pais', paisRouter);

// server PORT
const PORT = process.env.PORT || 3000;

// start server
app.listen(PORT, () => {
   console.log(`Server ss Running on PORT: ${PORT}`);
   mongoose.connect(
      `mongodb://localhost:27017/tiempo`,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
         console.log(`Database Connected!`);
      }
   );
});
