const express = require('express');
const connect = require('./config/database');
const app = express();
const TweetRepository = require('./repository/tweet-repository')

const Comment = require('./models/comment')

app.listen(3001, async () => {
    console.log('server started')
    await connect();
    console.log('mongo db started');

    const TweetRepo = new TweetRepository();

    const tweet = await TweetRepo.create({content : 'New Tweet with comment schemma'});
    console.log(tweet);

    const comment = await Comment.create({content : 'This is the comment'});
    tweet.comments.push(comment); 
    console.log(tweet);
});
