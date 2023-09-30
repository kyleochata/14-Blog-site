/*
blogpost table needs:
id PK
title,
date created,
username (only shown when logged in and when client is showing the specific article) FK from Users
content
*/
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Articles extends Model { }

Articles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    created_by_user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'articles'
  }
);

module.exports = { Articles }