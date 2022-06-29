const sequelize  = require('sequelize');
const db = require('../../db');

module.exports= db.define('course_plan_detail_outcome' ,
{
    id:
    {
        type : sequelize.BIGINT(20),
        allowNull: false,
        primaryKey : true,
        autoIncrement : true,
    },
    course_plan_detail_id:
    {
        type : sequelize.BIGINT(20),
        allowNull: false,
    },
    course_lo:
    {
        type : sequelize.STRING(100),
        allowNull: true,
    }
});