/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reward', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_modified_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rewarded_amount: {
      type: "DOUBLE",
      allowNull: true
    },
    rewarded_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rewarded_storage: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tenant_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tenant',
        key: 'id'
      }
    }
  }, {
    tableName: 'reward'
  });
};
