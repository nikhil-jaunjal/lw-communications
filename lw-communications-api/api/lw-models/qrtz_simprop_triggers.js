/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qrtz_simprop_triggers', {
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
    STR_PROP_1: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    STR_PROP_2: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    STR_PROP_3: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    INT_PROP_1: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    INT_PROP_2: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LONG_PROP_1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LONG_PROP_2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DEC_PROP_1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    DEC_PROP_2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    BOOL_PROP_1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BOOL_PROP_2: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'qrtz_simprop_triggers'
  });
};
