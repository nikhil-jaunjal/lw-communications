/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qrtz_triggers', {
    SCHED_NAME: {
      type: DataTypes.STRING(120),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qrtz_job_details',
        key: 'SCHED_NAME'
      }
    },
    TRIGGER_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    TRIGGER_GROUP: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    JOB_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      references: {
        model: 'qrtz_job_details',
        key: 'JOB_NAME'
      }
    },
    JOB_GROUP: {
      type: DataTypes.STRING(200),
      allowNull: false,
      references: {
        model: 'qrtz_job_details',
        key: 'JOB_GROUP'
      }
    },
    DESCRIPTION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    NEXT_FIRE_TIME: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PREV_FIRE_TIME: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PRIORITY: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TRIGGER_STATE: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    TRIGGER_TYPE: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    START_TIME: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    END_TIME: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CALENDAR_NAME: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MISFIRE_INSTR: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    JOB_DATA: {
      type: "BLOB",
      allowNull: true
    }
  }, {
    tableName: 'qrtz_triggers'
  });
};
