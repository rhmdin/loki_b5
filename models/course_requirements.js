"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    // === LANGKAH 1 UBAH course_requirements DIBAWAH MENJADI NAMA SESUAI MODEL === 
  class course_requirements extends Model {

    static associate(models) {}
  }
//   === LANGKAH 2 UBAH NAMA course_requirements.INIT SESUAI NAMA MODEL ===
  course_requirements.init(
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
      course_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: courses,
          key: "id",
        },
      },
      // foreign key
      required_course_id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          references: {
              model: courses,
              key: "id",
        },
      },
  
      required_level: {
          type: DataTypes.INT,
          allowNull : false
      },
  
      created_at: {
          type: DataTypes.DATE,
          allowNull : true
      },
  
      updated_at: {
          type: DataTypes.DATE,
          allowNull : true
      },
    //   === AKHIR DARI LANGKAH 3 ===


    },
    {
        // LANGKAH 4 UBAH NAMA TABLE NAME SESUAI NAMA MODELS
      tableName: "course_requirements", //EDIT HANYA INI SAJA -> LANGKAH 4
      sequelize,
      freezeTableName: true,
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
//   LANGKAH 5 UBAH NAMA course_requirements SESUAI NAMA MODELS
  return course_requirements; //EDIT HANYA INI SAJA -> LANGKAH 5
};
