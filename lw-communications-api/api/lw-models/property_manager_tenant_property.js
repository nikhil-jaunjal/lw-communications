/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('property_manager_tenant_property', {
    property_manager_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'property_manager',
        key: 'id'
      }
    },
    tenant_property_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tenant_property',
        key: 'id'
      }
    }
  }, {
    tableName: 'property_manager_tenant_property'
  });
};
