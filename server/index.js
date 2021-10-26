const express = require('express');
require('dotenv').config();
const cors = require('cors');
const client = require('twilio')(
    process.env.API_ACCOUNT_SID,
    process.env.API_TOKEN,
);

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send', (req, res) => {
    const { number, text } = req.body;

    client.messages
        .create({
            from: process.env.PHONE_NUMBER,
            to: number,
            body: text,
        })
        .then(() => {
            res.send({ status: true });
        })
        .catch(err => {
            console.log(err);
            res.send({ status: false });
        });
});

app.listen(process.env.SERVER_PORT, () => {
    console.log('Application listening on port 8080!');
});