const sequelize  = require('sequelize');
const db = require('../../db');

module.exports= db.define('course_plan_reference' ,
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

    title:
    {
        type : sequelize.STRING(255),
        allowNull: false 
    }, 

    author:
    {
        type : sequelize.STRING(255),
        allowNull: false 
    },

    publisher:
    {
        type : sequelize.STRING(255),
        allowNull: false 
    },

    year:
    {
        type : sequelize.INTEGER(11),
        allowNull : false
    },

    description:
    {
        type : sequelize.TEXT,
        allowNull: false 
    }

});

