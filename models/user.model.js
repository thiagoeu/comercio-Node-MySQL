import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";

const UserSchema = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    phone: {
      type: DataTypes.BIGINT, // Pode ser BIGINT para números grandes como telefone
      allowNull: true,
    },
    refresh_token: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    last_login_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("Active", "Inactive", "Banned"),
      defaultValue: "Active",
    },
    forgot_password_otp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    forgot_password_otp_expiry: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM("ADMIN", "USER"),
      defaultValue: "USER",
    },
  },
  {
    timestamps: true, // createdAt e updatedAt
    tableName: "users", // Nome da tabela no MySQL
  }
);

export default UserSchema;
