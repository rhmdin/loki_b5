//rute utk otentikasi login
require('dotenv').config()
var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken')

router.use(express.json())

const posts = [
    {
        username: 'Dina',
        title: 'Bismillah JWT'
    },
    {
        username: 'Rahma',
        title: 'Semangat dinaa'
    }
]

router.get('/posts', autheticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

//Akses token dg input username
router.post('/auth', (req, res) => {
    const username = req.body.username
    const user = { user: username }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken:accessToken })
});

function autheticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.endStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) res.sendStatus(403)
        req.user = user
        next()
    })
}

router.get('/login', (req, res, next) => {
    res.render('auth',{ name: '@studydocs'});
});

module.exports = router;
