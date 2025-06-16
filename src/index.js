import express from 'express';
import { connect } from './config/database.js';
const app = express();
import TweetService from './services/tweet-services.js'

app.listen(3001, async () => {
    console.log('server started')
    await connect();
    console.log('mongo db started');
    let serv = new TweetService();
    await serv.create({content : 'I am very #Excited to building tweet backend #happy #fun'});
});
