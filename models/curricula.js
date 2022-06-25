"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  // === LANGKAH 1 UBAH curricula DIBAWAH MENJADI NAMA SESUAI MODEL ===
  class curricula extends Model {
    static associate(models) {}
  }
  //   === LANGKAH 2 UBAH NAMA curricula.INIT SESUAI NAMA MODEL ===
  curricula.init(
    {
      // === LANGKAH 3 UBAH DIBAWAH INI SESUAI YANG UDAH DIBUAT SEBELUMNYA ===
      // primary key
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      active: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      year_start: {
        type: DataTypes.INT,
        allowNull: false,
      },

      year_end: {
        type: DataTypes.INT,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
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
      tableName: "curricula", //EDIT HANYA INI SAJA -> LANGKAH 4
      sequelize,
      freezeTableName: true,
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
  //   LANGKAH 5 UBAH NAMA curricula SESUAI NAMA MODELS
  return curricula; //EDIT HANYA INI SAJA -> LANGKAH 5
};
