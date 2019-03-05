/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('condition_report_room_element_files', {
    condition_report_room_element_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'condition_report_room_element',
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
    tableName: 'condition_report_room_element_files'
  });
};
