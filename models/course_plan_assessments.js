//skema orm course_plan_assessments.js
const db = require ("../config/conn");
const course_plans = require("./course_plans");
const { Sequelize, DataTypes } = require('sequelize');


const cpAssess = db.define( "course_plan_assessments", {
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    course_plan_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: course_plans,
          key: 'id'
        }
    },

    name:
    {
        type : DataTypes.STRING,
        allowNull: false 
    }, 

    percentage:
    {
        type : DataTypes.DOUBLE,
        allowNull: false 
    },

    flag:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    },

    created_at:
    {
        type : DataTypes.DATE,
    },

    updated_at:
    {
        type : DataTypes.DATE,

    }
 }, 
    {
        tableName: 'course_plan_assessments',
        timestamps: false
    }
    );

    module.exports = cpAssess;