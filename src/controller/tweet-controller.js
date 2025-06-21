import TweetService from '../services/tweet-services.js';
import upload from '../config/file-pload-s3-config.js';

const singleUpload = upload.single('image')

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        singleUpload(req, res, async function(err, data) {
            if(err) {
                res.status(500).json({error: err})
            }
            const payload = req.body;
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
            console.log(req.body);
            return res.status(201).json({
                success: true,
                message: 'Succesfully created a new tweet',
                data: response,
                err: {}
            });
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Not able create tweet',
            data: {},
            err: error
        })
    }
}

export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Succesfully fetched the tweet',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Not able fetch the tweet',
            data: {},
            err: error
        });
    }
}