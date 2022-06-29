const sequelize  = require('sequelize');
const db = require('../../db');

module.exports= db.define('course_plans' ,
{
    id:
    {
        type : sequelize.BIGINT(20),
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    course_id:
    {
        type : sequelize.BIGINT(20),
        allowNull: false,
        // references: {
        //   model: course,
        //   key: 'id'
        // }
    },

    rev:
    {
        type : sequelize.INTEGER(11),
        allowNull: false 
    }, 

    code:
    {
        type : sequelize.STRING(255),
        allowNull: false 
    },

    name:
    {
        type : sequelize.TEXT,
        allowNull: false
    },

    alias_name:
    {
        type : sequelize.TEXT
    },
    
    credit:
    {
        type : sequelize.INTEGER(11),
        allowNull : false
    },

    semester:
    {
        type : sequelize.INTEGER(11),
        allowNull : false
    },

    description:
    {
        type : sequelize.TEXT
    },

    material:
    {
        type : sequelize.TEXT
    },
    
    
    created_by:
    {
        type : sequelize.BIGINT(20),
    },

    validated_by:
    {
        type : sequelize.BIGINT(20),
    }

});