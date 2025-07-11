class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {

            console.log(error);
            console.log('Something went wrong in the crud repo');
            throw error;
        }
    }

    async destroy(id) {
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log('Something went wrong in the crud repo');
            throw error;
        }
    }

    async get(id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log('Something went wrong in the crud repo');
            throw error;
        }
    }

    async listAll() {
        try {
            const result = await this.model.findAll({});
            return result;
        } catch (error) {
            console.log('Something went wrong in the crud repo');
            throw error;
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new: true});
            return result;
        } catch (error) {
            console.log('Something went wrong in the crud repo');
            throw error;
        }
    }
}

export default CrudRepository;