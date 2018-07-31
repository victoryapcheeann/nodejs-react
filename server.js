//create-react-app client
//cd client & npm start
//Go to package.json to find out how to start server and client together using one command
//Start, server, client, dev
//npm install --save concurrently
//npm run dev 

const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    res.json([
        {
            id: 1,
            username: 'John'
        },
        {   
            id: 2,
            username: 'Han'
        }
    ])
})

app.get('/api/cars', (req, res) => {
    res.json([
        {
            id: 1,
            brand: 'Lambo'
        },
        {   
            id: 2,
            brand: 'Honda'
        }
    ])
})

const port = process.env.PORT || 3001;
app.listen(port);