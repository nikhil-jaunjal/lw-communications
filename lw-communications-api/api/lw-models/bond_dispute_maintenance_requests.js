/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bond_dispute_maintenance_requests', {
    bond_dispute_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'bond_dispute',
        key: 'id'
      }
    },
    maintenance_requests_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'maintenance_request',
        key: 'id'
      }
    }
  }, {
    tableName: 'bond_dispute_maintenance_requests'
  });
};
