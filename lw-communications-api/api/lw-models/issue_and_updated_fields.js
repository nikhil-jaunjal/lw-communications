/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('issue_and_updated_fields', {
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
    current_bond_amount: {
      type: "DOUBLE",
      allowNull: true
    },
    current_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    current_lease_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    current_property_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    current_property_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    current_rent_amount: {
      type: "DOUBLE",
      allowNull: true
    },
    other_query: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    property_manager_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tenant_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_bond_amount: {
      type: "DOUBLE",
      allowNull: true
    },
    updated_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_lease_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updated_property_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_property_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_rent_amount: {
      type: "DOUBLE",
      allowNull: true
    },
    support_question_master_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'support_question_master',
        key: 'id'
      }
    }
  }, {
    tableName: 'issue_and_updated_fields'
  });
};
