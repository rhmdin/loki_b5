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

