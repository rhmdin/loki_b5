"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    // === LANGKAH 1 UBAH course_plans DIBAWAH MENJADI NAMA SESUAI MODEL === 
  class course_plans extends Model {

    static associate(models) {}
  }
//   === LANGKAH 2 UBAH NAMA course_plans.INIT SESUAI NAMA MODEL ===
  course_plans.init(
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

    rev: {
        type: DataTypes.INT,
        allowNull: false
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

    material: {
      type: DataTypes.TEXT
    },

    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },

    validated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },

    validated_at: {
      type: DataTypes.DATE,
      allowNull: true
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
      tableName: "course_plans", //EDIT HANYA INI SAJA -> LANGKAH 4
      sequelize,
      freezeTableName: true,
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
//   LANGKAH 5 UBAH NAMA course_plans SESUAI NAMA MODELS
  return course_plans; //EDIT HANYA INI SAJA -> LANGKAH 5
};
