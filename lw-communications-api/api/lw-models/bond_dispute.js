/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bond_dispute', {
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
    bond_dispute_pdf_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bond_dispute_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_to_government_agency_selected: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_to_property_manager_selected: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_to_tenant_selected: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    local_pdf_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    condition_report_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'condition_report',
        key: 'id'
      },
      unique: true
    },
    government_agency_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'government_agency',
        key: 'id'
      }
    },
    tenant_property_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tenant_property',
        key: 'id'
      },
      unique: true
    }
  }, {
    tableName: 'bond_dispute'
  });
};
