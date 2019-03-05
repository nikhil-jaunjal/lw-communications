/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maintenance_request_comment', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'comment',
        key: 'id'
      }
    },
    maintenance_request_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'maintenance_request',
        key: 'id'
      }
    }
  }, {
    tableName: 'maintenance_request_comment'
  });
};
