"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    // === LANGKAH 1 UBAH course_plan_references DIBAWAH MENJADI NAMA SESUAI MODEL === 
  class course_plan_references extends Model {

    static associate(models) {}
  }
//   === LANGKAH 2 UBAH NAMA course_plan_references.INIT SESUAI NAMA MODEL ===
  course_plan_references.init(
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
      course_plan_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: course_plans,
          key: "id",
        },
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      author: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      publisher: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      year: {
          type: DataTypes.INT,
          allowNull: false,
      },
      description: {
          type: DataTypes.TEXT,
          allowNull: false,
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
      tableName: "course_plan_references", //EDIT HANYA INI SAJA -> LANGKAH 4
      sequelize,
      freezeTableName: true,
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
//   LANGKAH 5 UBAH NAMA course_plan_references SESUAI NAMA MODELS
  return course_plan_references; //EDIT HANYA INI SAJA -> LANGKAH 5
};
