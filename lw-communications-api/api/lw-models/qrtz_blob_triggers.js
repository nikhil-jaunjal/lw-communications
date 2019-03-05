/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qrtz_blob_triggers', {
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
    BLOB_DATA: {
      type: "BLOB",
      allowNull: true
    }
  }, {
    tableName: 'qrtz_blob_triggers'
  });
};
