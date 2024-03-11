const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
const apiKey = 'ddf13f29e2a7416eb9ee9e1a682e2de3'; // Replace with your updated NewsAPI API key
const port = process.env.PORT || 3000
app.use(express.json());
const path = require('path');
const ejs = require('ejs');
app.set('view engine', 'ejs');
const view_path = path.join(__dirname,'./views');
app.use(express.static(view_path));
app.get('/', (req, res)=>{
    res.send("Hello ");
})

app.get('/index', async (req, res) => {
    const axios = require('axios');

    const apiKey = 'ddf13f29e2a7416eb9ee9e1a682e2de3';
    const apiUrl = 'https://newsapi.org/v2/top-headlines';
    
    try {
        const response = await axios.get(apiUrl, {
            params: {
                apiKey: apiKey,
                country: 'in', // Set the country code for India
            },
        });
        const name = "Chandrakesh";
        const newsData = response.data.articles;
        res.render('index', { name, newsData });
    } catch (error) {
        console.error('Error:', error.message);
    }
    
});

app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`)
})
