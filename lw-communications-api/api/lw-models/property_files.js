/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('property_files', {
    property_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'property',
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
    tableName: 'property_files'
  });
};
