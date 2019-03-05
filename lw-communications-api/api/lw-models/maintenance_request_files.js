/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maintenance_request_files', {
    maintenance_request_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'maintenance_request',
        key: 'id'
      }
    },
    server_file_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'server_file',
        key: 'id'
      }
    }
  }, {
    tableName: 'maintenance_request_files'
  });
};
