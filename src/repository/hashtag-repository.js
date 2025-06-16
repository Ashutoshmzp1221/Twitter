const Hashtag = require('../models/hashtag');

class HashtagRepository {

    async create(data) {
        try {
            const tags = await Hashtag.create(data);
            return tags;
        } catch (error) {
            console.log('Something went wrong in respository layer');
            throw error;
        }
    }

    async bulkCreate (data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log('Something went wrong in hashtag respository layer');
            throw error;
        }
    }

    async get(id) {
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log('Something went wrong in respository layer');
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log('Something went wrong in respository layer');
            throw error;
        }
    }

    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title : titleList
            });
            return tags;
        } catch (error) {
            console.log('Something went wrong in respository layer');
            throw error;
        }
    }
}

module.exports = HashtagRepository;