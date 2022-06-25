"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    // === LANGKAH 1 UBAH curriculum_profiles DIBAWAH MENJADI NAMA SESUAI MODEL === 
  class curriculum_profiles extends Model {

    static associate(models) {}
  }
//   === LANGKAH 2 UBAH NAMA curriculum_profiles.INIT SESUAI NAMA MODEL ===
  curriculum_profiles.init(
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
          type : DataTypes.STRING,
          allowNull : false,
  
      },
  
      profile: {
          type : DataTypes.TEXT,
          allowNull : false,
      },
  
      description: {
          type : DataTypes.TEXT
      },
  
      created_at: {
          type : DataTypes.DATE,
          allowNull : true
      },
      
      updated_at: {
          type : DataTypes.DATE,
          allowNull : true
      },
    //   === AKHIR DARI LANGKAH 3 ===


    },
    {
        // LANGKAH 4 UBAH NAMA TABLE NAME SESUAI NAMA MODELS
      tableName: "curriculum_profiles", //EDIT HANYA INI SAJA -> LANGKAH 4
      sequelize,
      freezeTableName: true,
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
//   LANGKAH 5 UBAH NAMA curriculum_profiles SESUAI NAMA MODELS
  return curriculum_profiles; //EDIT HANYA INI SAJA -> LANGKAH 5
};
