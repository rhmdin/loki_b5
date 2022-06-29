const sequelize  = require('sequelize');
const db = require('../../db');

module.exports= db.define('course_plan_detail' ,
{
    id:
    {
        type : sequelize.BIGINT(20),
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    course_plan_id:
    {
        type : sequelize.BIGINT(20),
        allowNull: false,
        // references: {
        //   model: course_plans,
        //   key: 'id'
        // }
    },

    week:
    {
        type : sequelize.INTEGER(11),
        allowNull: false 
    }, 

    material:
    {
        type : sequelize.TEXT,
        allowNull: false 
    },

    method:
    {
        type : sequelize.TEXT,
        allowNull: false
    },

    student_experience:
    {
        type : sequelize.TEXT,
        allowNull: true
    }

});

