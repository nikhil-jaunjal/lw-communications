/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jhi_user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password_hash: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    terms_and_conditions_accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    activated: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    lang_key: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    country_key: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    cloud_storage_usage_limit: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    activation_key: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reset_key: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reset_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_modified_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'jhi_user'
  });
};
