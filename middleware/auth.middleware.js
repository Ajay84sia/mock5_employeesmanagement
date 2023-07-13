const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        try {
            console.log(token)
            const verifyToken = jwt.verify(token, "mock5");
            if (verifyToken) {
                req.body.userId = verifyToken.userId;
                next();

            }else{
                res.send({"msg":"Please Login!!"})
            }
        } catch (error) {
            res.send({"err":error.message})
        }
    }
}

module.exports = {
    auth
}