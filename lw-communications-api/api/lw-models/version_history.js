/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('version_history', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_modified_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    apple_store_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    google_store_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    os: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    version: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    web: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'version_history'
  });
};
