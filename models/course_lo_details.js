"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  // === LANGKAH 1 UBAH course_lo_details DIBAWAH MENJADI NAMA SESUAI MODEL ===
  class course_lo_details extends Model {
    static associate(models) {}
  }
  //   === LANGKAH 2 UBAH NAMA course_lo_details.INIT SESUAI NAMA MODEL ===
  course_lo_details.init(
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
      curriculum_lo_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: curriculum_los,
          key: "id",
        },
      },

      //foreign key
      course_lo_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: course_los,
          key: "id",
        },
      },

      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      //   === AKHIR DARI LANGKAH 3 ===
    },
    {
      // LANGKAH 4 UBAH NAMA TABLE NAME SESUAI NAMA MODELS
      tableName: "course_lo_details", //EDIT HANYA INI SAJA -> LANGKAH 4
      sequelize,
      freezeTableName: true,
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  //   LANGKAH 5 UBAH NAMA course_lo_details SESUAI NAMA MODELS
  return course_lo_details; //EDIT HANYA INI SAJA -> LANGKAH 5
};
