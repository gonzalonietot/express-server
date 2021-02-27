import { ErrorHandler } from './error'


class Access {
    constructor(options = {}) {
        //TODO constructor
    }
    use (req, res, next) {
        let token = req.headers['access-token']
        if (token) {
            jwt.verify(token, secretKey.secret_key, (err, decoded) => {
                if (err) {
                    throw new ErrorHandler(401, 'Invalid token')
                } else {
                    req.decoded = decoded
                    return next()
                }
            })
        } else {
            throw new ErrorHandler(500, 'Token not found')
        }
    }
}
module.exports = Access