const Tweet = require('../models/tweet');

class TweetRepository {

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log('Something went wrong in tweet respository layer');
            throw error;
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log('Something went wrong in respository layer');
            throw error;
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path : 'comments'});
            return tweet;
        } catch (error) {
            console.log('Something went wrong in respository layer');
            throw error;
        }
    }

    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log('Something went wrong in respository layer');
            throw error;
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log('Something went wrong in respository layer');
            throw error;
        }
    }
}

module.exports = TweetRepository;