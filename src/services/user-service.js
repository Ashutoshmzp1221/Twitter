import { UserRepository } from '../repository/index.js';

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp (data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log('Something went wrong in the service layer');
            throw error;
        }
    }

    async signIn(data) {
        try {
            const user = await this.userRepository.findBy({email: data.email});
            console.log(user);
            if(!user) {
                throw {
                    message: 'no user found',
                }
            }
            if(!user.comparePassword(data.password)) {
                throw {
                    message: 'Incorrect Password',
                }
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw error;
        }
    }
}

export default UserService;