/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qrtz_scheduler_state', {
    SCHED_NAME: {
      type: DataTypes.STRING(120),
      allowNull: false,
      primaryKey: true
    },
    INSTANCE_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    LAST_CHECKIN_TIME: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CHECKIN_INTERVAL: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'qrtz_scheduler_state'
  });
};
