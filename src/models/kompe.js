const sequelize = require('sequelize');
const db = require('../../db');

module.exports= db.define('course_plan_assessment' ,
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

    name:
    {
        type : sequelize.STRING(255),
        allowNull: false 
    }, 

    percentage:
    {
        type : sequelize.DOUBLE,
        allowNull: false 
    },

    flag:
    {
        type : sequelize.INTEGER,
        allowNull: false
    }

});
