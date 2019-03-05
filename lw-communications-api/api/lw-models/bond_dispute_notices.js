/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bond_dispute_notices', {
    bond_dispute_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'bond_dispute',
        key: 'id'
      }
    },
    notices_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'notice',
        key: 'id'
      }
    }
  }, {
    tableName: 'bond_dispute_notices'
  });
};
