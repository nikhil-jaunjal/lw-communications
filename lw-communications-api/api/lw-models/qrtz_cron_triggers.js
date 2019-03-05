/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qrtz_cron_triggers', {
    SCHED_NAME: {
      type: DataTypes.STRING(120),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qrtz_triggers',
        key: 'SCHED_NAME'
      }
    },
    TRIGGER_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qrtz_triggers',
        key: 'TRIGGER_NAME'
      }
    },
    TRIGGER_GROUP: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qrtz_triggers',
        key: 'TRIGGER_GROUP'
      }
    },
    CRON_EXPRESSION: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    TIME_ZONE_ID: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    tableName: 'qrtz_cron_triggers'
  });
};
