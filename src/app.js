const express = require('express');
const app = express();

//config
// app.set('port', 3000 || process.env.PORT);

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use(require('./routes'));

//run server
app.listen(process.env.PORT || 3000, () => {
    console.log(`server running on port ${app.get('port')}`);
})