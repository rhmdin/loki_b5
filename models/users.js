<<<<<<< HEAD:routes/models/users.js
// skema orm lecturers
const Sequelize = require("sequelize");
const db = require("../config/conn");

const users = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email_verified_at: {
      type: Sequelize.DATE,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    remember_token: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
      allowNull:false,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  },

  {
    tableName: "users",
    timestamps: false //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
  }
);
module.exports = users;
=======
module.exports = (sequelize, DataTypes) => {
       
const users = sequelize.define('users' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },
    name:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },    
    email:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },
    email_verified_at:
    {
        type : DataTypes.DATE,
        allowNull: true 
    },    
    password:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },
    remember_token:
    {
        type : DataTypes.TEXT,
        allowNull: true
    },    
    type:
    {
        type : Sequelize.ENUM('M', 'D', 'T'),
        allowNull: false
    },
    created_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },    
    update_at:
    {
        type : DataTypes.DATE,
        allowNull: true
    },
});

return users;
}

>>>>>>> 6586f9e165b5b5271d37255b899f78b2d81bb4ad:models/users.js
