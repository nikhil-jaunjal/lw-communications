/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qrtz_calendars', {
    SCHED_NAME: {
      type: DataTypes.STRING(120),
      allowNull: false,
      primaryKey: true
    },
    CALENDAR_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    CALENDAR: {
      type: "BLOB",
      allowNull: false
    }
  }, {
    tableName: 'qrtz_calendars'
  });
};
