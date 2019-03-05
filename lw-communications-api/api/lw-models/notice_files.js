/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notice_files', {
    notice_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'notice',
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
    tableName: 'notice_files'
  });
};
