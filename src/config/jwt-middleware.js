import JWT from 'passport-jwt';
import User from '../models/user.js';

const JwtStrategy = JWT.Strategy;
const ExtratJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtratJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitter_secret'
}

export const passportAuth = (passport) =>{
    try {
        passport.use(new JwtStrategy(opts, async(jwt_payload, done) => {
            const user = await User.findById(jwt_payload.id);
            if(!user) {
                done(null, false);
            } else {
                done(null, user);
            }
        }))
    } catch (error) {
        console.log('Somehting went wrong');
        throw error;
    }
}