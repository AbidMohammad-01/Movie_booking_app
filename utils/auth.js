const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretKey = process.env.JWT_SECRET_KEY
module.exports = function (req, res, next) {
    const bToken = req.header.authorization
    const token = bToken.split('')[1]
    console.log('token', token);
    if (!token) {
        return res.status(401).json({ message: "Authorization Failed" })

    }
    const decoded = jwt.verify(token, secretKey)
    req.id = decoded.id
    console.log('User', decoded);
    next()
}