const { raw } = require('express');
const cpmk = require('../models/cpmk');

const beranda = async (req,res)=>{
    await res.render('mahasiswa/beranda');
    }

const login= async (req,res)=>{
    await res.render('login')
}

module.exports = {
    beranda,login
}
