/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tenant_property_server_file', {
    tenant_properties_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tenant_property',
        key: 'id'
      }
    },
    server_files_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'server_file',
        key: 'id'
      }
    }
  }, {
    tableName: 'tenant_property_server_file'
  });
};
