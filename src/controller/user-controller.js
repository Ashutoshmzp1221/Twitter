import UserService from "../services/user-service.js";


const userService = new UserService();

export const signUp = async (req, res) => {
    try {
        const response = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        });
    }
}

export const signIn = async(req, res) => {
    try {
        const token = await userService.signIn(req.body);
        return res.status(200).json({
            message: 'Successfully signed in',
            success: true,
            data: token,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            success: false,
            data: {},
            err: error
        });
    }
}