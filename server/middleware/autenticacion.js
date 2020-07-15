var jwt = require('jsonwebtoken');

//=================================
//       Verificar token
//=================================

let verificaToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send({
            ok: false,
            message: 'Toket inválido'
        })
    }
    if (token.indexOf('Bearer ')) {
        token = token.replace('Bearer ', '');
    }


    jwt.verify(token, process.env.SEED, (err, decode) => {
        if (err) {
            return res.status(401).send({
                ok: false,
                message: 'Toket inválido'
            });
        } else {
            req.token = token
            next()
        }
    });
};



module.exports = {
    verificaToken
};