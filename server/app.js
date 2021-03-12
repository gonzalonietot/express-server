/* global process */
import bodyParser from 'body-parser';
import cors from 'cors';
import CustomRoutes from './src/routes/routes';
import express from 'express';
const port = process.env.PORT || 3000;


const app = express();

app.use(cors);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.enable('jsonp callback');


// Routes
const routes = new CustomRoutes(app);
routes.createRoutes();

// Start server
app.listen(port, () => {
    console.log('Running server')
});