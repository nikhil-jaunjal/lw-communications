/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('condition_report', {
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
    condition_report_pdf_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    condition_report_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_master: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    local_pdf_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    send_to_government_agency: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    send_to_property_manager: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    send_to_tenant: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    server_file_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'server_file',
        key: 'id'
      },
      unique: true
    },
    tenant_property_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tenant_property',
        key: 'id'
      }
    }
  }, {
    tableName: 'condition_report'
  });
};
