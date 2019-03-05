/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qrtz_simple_triggers', {
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
    REPEAT_COUNT: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    REPEAT_INTERVAL: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    TIMES_TRIGGERED: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'qrtz_simple_triggers'
  });
};
