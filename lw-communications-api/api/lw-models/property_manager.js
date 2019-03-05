/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('property_manager', {
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
    invited_pm: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'agency',
        key: 'id'
      }
    },
    body_corporate_manager_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'body_corporate_manager',
        key: 'id'
      },
      unique: true
    },
    landlord_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'landlord',
        key: 'id'
      },
      unique: true
    }
  }, {
    tableName: 'property_manager'
  });
};
