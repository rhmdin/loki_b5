const sequelize  = require('sequelize');
const db = require('../../db');

module.exports= db.define('cpmk' ,
{
    id:
    {
        type : sequelize.INTEGER(10),
        allowNull: false,
        primaryKey : true,
        autoIncrement : true,
    },
    detail:
    {
        type : sequelize.STRING(99),
        allowNull: false,
    },
    id_course:
    {
        type : sequelize.INTEGER(20),
        allowNull: true,
    }
});