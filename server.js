const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: 'http://localhost:3001'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./models/index');

db.mongoose
    .connect(db.config.url, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('Соеденено с бд'))
    .catch(err => {
        console.log('Ошибка:', err)
        process.exit;
    })

app.get('/', (req, res) => {
    res.json({ message: 'hello' })
})

require('./routes/todolist.routes')(app)

const PORT = process.env.PORT || 3001;

const path = require('path');

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('*',  (request, response) => {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server on port: ${PORT}`);
})