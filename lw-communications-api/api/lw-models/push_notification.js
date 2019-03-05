/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('push_notification', {
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
    badge_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    device_os: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device_registration_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'push_notification'
  });
};
