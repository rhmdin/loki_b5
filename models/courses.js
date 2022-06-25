"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    // === LANGKAH 1 UBAH courses DIBAWAH MENJADI NAMA SESUAI MODEL === 
  class courses extends Model {

    static associate(models) {}
  }
//   === LANGKAH 2 UBAH NAMA courses.INIT SESUAI NAMA MODEL ===
  courses.init(
    {

        // === LANGKAH 3 UBAH DIBAWAH INI SESUAI YANG UDAH DIBUAT SEBELUMNYA ===
       // primary key
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      // foreign key
      curriculum_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: curricula,
          key: "id",
        },
      },
  
      code: {
          type: DataTypes.STRING,
          allowNull: false
      },
  
      name: {
          type: DataTypes.TEXT,
          allowNull: false
      },
  
      alias_name: {
          type: DataTypes.TEXT
      },
  
      credit: {
          type: DataTypes.INT,
          allowNull: false
      },
  
      semester: {
          type: DataTypes.INT,
          allowNull: false
      },
      
      description: {
          type: DataTypes.TEXT
      },
  
      created_at: {
          type: DataTypes.DATE,
          allowNull: true
      },
      
      updated_at: {
          type: DataTypes.DATE,
          allowNull: true
      },
    //   === AKHIR DARI LANGKAH 3 ===


    },
    {
        // LANGKAH 4 UBAH NAMA TABLE NAME SESUAI NAMA MODELS
      tableName: "courses", //EDIT HANYA INI SAJA -> LANGKAH 4
      sequelize,
      freezeTableName: true,
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
//   LANGKAH 5 UBAH NAMA courses SESUAI NAMA MODELS
  return courses; //EDIT HANYA INI SAJA -> LANGKAH 5
};
