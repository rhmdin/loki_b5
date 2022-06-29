const { raw } = require('express');
const cp = require('../models/course_plan');
const course = require('../models/course');
const cpmk = require('../models/cpmk');
const ref = require('../models/reference');
const komp = require('../models/kompe');
const perte = require('../models/pert');
const kompe = require('../models/kompe');
const course_plan = require('../models/course_plan');


//Dosen
//Beranda
const berandaD = async (req,res)=>{
    await res.render('dosen/berandaDosen');
    }

//Form
const tnilai = async (req,res)=>{
        await res.render('dosen/tambahPenilaian');
    }

const tpert = async (req,res)=>{
    await res.render('dosen/tambahPertemuan');
}

const tref = async (req,res)=>{
    await res.render('dosen/tambahreferensi');
}

const tcpmk = async (req,res)=>{
    await res.render('dosen/tambahCPMK');
}

//View RPS
const daftarRPSDosen = async (req,res)=>{
    const cps = await cp.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render('dosen/daftarRPSDosen', {cps});
    }

//Read Data 
const cpmkD = async (req,res)=>{
    const cpmks = await cpmk.findAll({
        raw:true
    })
    const refs = await ref.findAll({
        raw:true
    })
    const komps = await komp.findAll({
        raw:true
    })
    const pertem = await perte.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render('dosen/lihatRPSDosen', {cpmks,refs,komps,pertem});
    }

    const idnilai = async (req,res)=>{
        const {idn} = await course_plan.findOne({
            where:{
                idn:course_id
            },
            raw:true
        }).catch(error=>console.log(error))
        await res.render('dosen/daftarRPSDosen', {idn});
        }

// Create
const penilaianSave = async (req,res)=>{
    const {course_plan_id,name,percentage,flag} = await req.body;
    const pnilai = await kompe.create({
        course_plan_id,name,percentage,flag
    }).catch(error=>console.log(error));
console.log(pnilai)
await  res.redirect('/lihatRPSDosen');
}

const pertemuanSave = async (req,res)=>{
    const {course_plan_id,week, material,method,student_experience} = await req.body;
    const addpert = await perte.create({
        course_plan_id,week, material,method,student_experience
    }).catch(error=>console.log(error));
console.log(addpert)
await  res.redirect('/lihatRPSDosen');
}

const referensiSave = async (req,res)=>{
    const {course_plan_id,title,author,publisher,year,description} = await req.body;
    const addref = await ref.create({
        course_plan_id,title,author,publisher,year,description
    }).catch(error=>console.log(error));
console.log(addref)
await  res.redirect('/lihatRPSDosen');
}

const cpmkSave = async (req,res)=>{
    const {course_plan_detail_id,course_lo} = await req.body;
    const addcpmk = await cpmk.create({
        course_plan_detail_id,course_lo
    }).catch(error=>console.log(error));
console.log(addcpmk)
await  res.redirect('/lihatRPSDosen');
}

//UPDATE
const cpmkE = async (req,res)=>{
    const {course_id} = await req.params;
    const cpmkE = await cpmk.findOne({
        where:{
            course_plan_detail_id:course_id
        },
        raw:true
    }).catch(error=>console.log(error))
    res.render('editCPMK', {cpmkE})
    }

const cpmkUpdate = async (req,res)=>{
const {id_course} = req.params;
const data = req.body;
const selector = {where:{id_course:id_course}}
await cpmk.update(data,selector).catch(error=>console.log(error))

res.redirect('/lihatRPSDosen')
}


module.exports = {
    berandaD,daftarRPSDosen, cpmkD,tnilai,penilaianSave,idnilai,pertemuanSave,tpert,referensiSave,tref,tcpmk,cpmkSave,cpmkE,cpmkUpdate
}
