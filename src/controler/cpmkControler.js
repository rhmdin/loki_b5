const { raw } = require('express');
const cpmk = require('../models/cpmk');

const beranda= async (req,res)=>{
    await res.render('beranda');
    }

const berandaRPS = async (req,res)=>{
    const cpmks = await cpmk.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render('lihatRPS', {cpmks});
    }

const cpmkForm = async (req,res)=>{
    await res.render('createCPMK');
    }

const cpmkSave = async (req,res)=>{
    const {detail,id_course} = await req.body;
    const Cpmk = await cpmk.create({
       detail, id_course
    }).catch(error=>console.log(error));
console.log(Cpmk)
await  res.redirect('/lihatRPS');
}

const cpmkEdit = async (req,res)=>{
        const {id_course} = await req.params;
    const Cpmk = await cpmk.findOne({
        where:{
            id_course:id_course
        },
        raw:true
    }).catch(error=>console.log(error))
    res.render('editCPMK', {Cpmk})
}

const cpmkUpdate = async (req,res)=>{
    const {id_course} = req.params;
    const data = req.body;
    const selector = {where:{id_course:id_course}}
await cpmk.update(data,selector).catch(error=>console.log(error))

res.redirect('/lihatRPS')
}

const cpmkDelete = async (req,res)=>{
    const {id_course} = req.params;
    const Cpmk = await cpmk.destroy({
        where:{
            id_course:id_course
        },
        raw:true
    }).catch(error=>console.log(error));

res.redirect('/lihatRPS')
}



module.exports = {
        beranda,berandaRPS,cpmkForm,cpmkSave, cpmkEdit, cpmkUpdate, cpmkDelete
    }