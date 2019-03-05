/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qrtz_fired_triggers', {
    SCHED_NAME: {
      type: DataTypes.STRING(120),
      allowNull: false,
      primaryKey: true
    },
    ENTRY_ID: {
      type: DataTypes.STRING(95),
      allowNull: false,
      primaryKey: true
    },
    TRIGGER_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    TRIGGER_GROUP: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    INSTANCE_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    FIRED_TIME: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    SCHED_TIME: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    PRIORITY: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    STATE: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    JOB_NAME: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    JOB_GROUP: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IS_NONCONCURRENT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    REQUESTS_RECOVERY: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'qrtz_fired_triggers'
  });
};
