const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./database_server");


sequelize.define('course_plans' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    course_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false
    },

    rev:
    {
        type : DataTypes.INTEGER,
        allowNull: false 
    }, 

    code:
    {
        type : DataTypes.STRING,
        allowNull: false 
    },

    name:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },

    alias_name:
    {
        type : DataTypes.TEXT,
        allowNull : true
    },

    credit:
    {
        type : DataTypes.INTEGER,
        allowNull: false 
    },

    semester:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },

    description:
    {
        type : DataTypes.TEXT,
        allowNull: true

    },

    material:
    {
        type : DataTypes.TEXT,
        allowNull: true
    }, 

    created_by:
    {
        type : DataTypes.BIGINT,
        allowNull: true
    }, 

    validated_by:
    {
        type : DataTypes.BIGINT,
        allowNull: true
    }, 

    validated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }, 

    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }, 

    updated_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    }

});