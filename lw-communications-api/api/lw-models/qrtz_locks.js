/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qrtz_locks', {
    SCHED_NAME: {
      type: DataTypes.STRING(120),
      allowNull: false,
      primaryKey: true
    },
    LOCK_NAME: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'qrtz_locks'
  });
};
