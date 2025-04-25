import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";

const userShema = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(100),
    },
    product_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    requires_prescription: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    prescription_file: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

export default userShema;
