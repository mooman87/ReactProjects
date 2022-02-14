const express = require('express');
const mongoose = require('mongoose');
const orals = require('./oralsList');
const tracleerSurvey = require('./tracleerSurvey');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config(); 


const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.get('/orals', (req, res) => {
   res.send(orals); 
});

app.get('/tracleer', (req, res) => {
    res.send(tracleerSurvey);
})


mongoose.connect(process.env.MDB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log('Error connecting to MongoDB Atlas...', err);
    } else {
        console.log('Connected to MongoDB Atlas!');
    }

});

app.listen(port, function() {
    console.log('Server is running on port: ' + port);
});

app.use('/api/v1/', require('./routers/patient.router'));

