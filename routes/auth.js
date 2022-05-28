//rute utk otentikasi login
require('dotenv').config()
const { useColors } = require('debug/src/browser');
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { hash } = require('bcrypt');

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

router.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

//Akses token dg input username
router.post('/auth', (req, res) => {
    const username = req.body.username
    const user = { user: username }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken : accessToken })
});

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.endStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) res.sendStatus(403)
        req.user = user
        next()
    })
}


const users = []

router.get('/user1', (req, res) => {
    res.json(users)
})

router.post('/user1', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    }
    catch{
        res.status(500).send()
    }
})

router.post('/user1/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if(user == null){
        return res.status(400).send('Nama pengguna tidak ditemukan')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            res.send('Log in sukses')
        }
        else{
            res.send('Password salah')
        }
    } catch{
        res.status(500).send()
    }
})
router.get('/login', (req, res, next) => {
    res.render('auth',{ name: 'KOPI'});
});

module.exports = router;
