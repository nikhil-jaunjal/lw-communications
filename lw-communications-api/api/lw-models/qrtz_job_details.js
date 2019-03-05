/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qrtz_job_details', {
    SCHED_NAME: {
      type: DataTypes.STRING(120),
      allowNull: false,
      primaryKey: true
    },
    JOB_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    JOB_GROUP: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    JOB_CLASS_NAME: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    IS_DURABLE: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    IS_NONCONCURRENT: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    IS_UPDATE_DATA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    REQUESTS_RECOVERY: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    JOB_DATA: {
      type: "BLOB",
      allowNull: true
    }
  }, {
    tableName: 'qrtz_job_details'
  });
};
