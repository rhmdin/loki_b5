
const sequelize  = require('sequelize');
const db = require('../../db');

module.exports= db.define('course' ,
{
    id:
    {
        type : sequelize.BIGINT(20),
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    curriculum_id:
    {
        type : sequelize.BIGINT(20),
        allowNull: false,
        // references: {
        //   model: curricula,
        //   key: 'id'
        // }
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

});